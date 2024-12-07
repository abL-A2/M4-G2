import { FreshContext } from "$fresh/server.ts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = Deno.env.get("AI_MODEL_API_KEY");

if (!API_KEY) {
  throw new Error("API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function handler(req: Request, _ctx: FreshContext): Promise<Response> {
  try {
    const { message } = await req.json();

    const result = await model.generateContent(message);
    const response = await result.response.text();

    return new Response(JSON.stringify({ response }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}