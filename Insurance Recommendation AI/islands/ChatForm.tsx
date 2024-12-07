import { useSignal } from "@preact/signals";

// Types for our chat messages
interface ChatMessage {
  role: "user" | "ai";
  content: string;
}

export default function ChatForm() {
  // State management using Preact signals
  const messages = useSignal<ChatMessage[]>([]);
  const currentInput = useSignal("");

  // Handle form submission
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    
    if (!currentInput.value.trim()) {
      console.log("Empty input, returning");
      return;
    }

    console.log("Input is valid, proceeding with submission");
    // Add user message to chat
    messages.value = [...messages.value, {
      role: "user",
      content: currentInput.value
    }];

    // Clear input
    const userMessage = currentInput.value;
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

      // Add AI response to chat
      messages.value = [...messages.value, {
        role: "ai",
        content: data.response
      }];
    } catch (error) {
      console.error("Error:", error);
      messages.value = [...messages.value, {
        role: "ai",
        content: "Sorry, I encountered an error processing your request."
      }];
    }
  };

  return (
    <div class="container mx-auto px-4 py-8 max-w-2xl min-h-screen">
      {/* Chat display area */}
      <div class="bg-white rounded-lg shadow-md p-4 h-[500px] overflow-y-auto mb-4 border border-gray-200">
        {messages.value.map((msg, i) => (
          <div key={i} class={`mb-4 ${msg.role === "ai" ? "text-gray-700" : "text-gray-800"}`}>
            <strong>{msg.role === "ai" ? "Tina" : "You"}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {/* Input form */}
      <form 
        onSubmit={handleSubmit}
        class="flex gap-2"
      >
        <input
          type="text"
          value={currentInput.value}
          onChange={(e) => currentInput.value = (e.target as HTMLInputElement).value}
          class="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder-gray-400"
          placeholder="Type your message..."
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
