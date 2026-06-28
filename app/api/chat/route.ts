import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
  {
    reply: error instanceof Error ? error.message : "Unknown error",
  },
  { status: 500 }
);
  }
}