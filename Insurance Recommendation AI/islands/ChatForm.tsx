import { useSignal } from "@preact/signals";
import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
// import { resetPropWarnings } from "preact/debug";

// designates name for the AI's responses
const aiName = "Tina";

// types for our chat messages, and assignment for the name of sender
interface ChatMessage {
  role: "user" | "ai";
  name: typeof aiName | "You";
  content: string;
}

// initialises a markdown parser for use
const markdownParse = marky;

export default function ChatForm() {
  // state management using Preact signals
  const messages = useSignal<ChatMessage[]>([]);
  const currentInput = useSignal("");

  // submission handler
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    
    if (!currentInput.value.trim()) {
      console.log("Empty input, returning");
      return;
    }

    console.log("Input is valid, proceeding with submission");
    // add user message to chat
    const userMessage = currentInput.value
    messages.value = [...messages.value, {
      role: "user",
      name: "You",
      content: userMessage
    }];

    // clear input
    currentInput.value = "";

    try {
      console.log("Sending request to API");
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log("Received API response:", data);

      // parses stringified text into markdown
      const parsedText = markdownParse(data.response)

      // add ai response to chat
      messages.value = [...messages.value, {
        role: "ai",
        name: aiName,
        content: parsedText
      }];
    } catch (error) {
      console.error("Error processing request:", error);
      messages.value = [...messages.value, {
        role: "ai",
        name: aiName,
        content: "Sorry, I encountered an error processing your request."
      }];
    }
  };

  return (
    <div class="container mx-auto px-4 py-8 max-w-2xl min-h-screen">
      {/* ⚠️ chat display area */}
      <div class="bg-white rounded-lg shadow-md p-4 h-[500px] overflow-y-auto mb-4 border border-gray-200">
        {messages.value.map((msg, i) => (
          <div key={i} class={`mb-4 ${msg.role === "ai" ? "text-gray-700" : "text-gray-800"}`}>
            <strong>{msg.name}: </strong>
            {msg.role === "ai"
    ? <span dangerouslySetInnerHTML={{ __html: msg.content as string }}></span>
    : msg.content}
          </div>
        ))}
      </div>

      {/* input form */}
      <form 
        onSubmit={handleSubmit}
        class="flex gap-2"
      >
        <input
          type="text"
          value={currentInput.value}
          onChange={(e) => currentInput.value = (e.target as HTMLInputElement).value}
          class="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder-gray-400"
          placeholder="Type your message."
        />
        <button 
          type="submit"
          class="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Send
        </button>
      </form>
    </div>
  );
}
