const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = "583fbfc1069034122ce9c3316be3390e6c217172aca2f10e7a";

const SYSTEM_PROMPT =
  "You are MIZAN, a helpful Arabic/English legal assistant. Provide general legal guidance in Arabic and English. Be professional, clear, and empathetic. Format your responses clearly with bullet points or numbered lists where appropriate. Keep responses concise but comprehensive. If you're unsure about a specific legal matter, recommend consulting a qualified lawyer.";

export async function getGeminiResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nUser question: ${userMessage}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return getMockResponse(userMessage);
  }
}

function getMockResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("evict") || q.includes("lease") || q.includes("landlord")) {
    return "Under UAE Rental Law (Law 26/2007), your landlord must provide at least 12 months' written notice before evicting you. With 6 months remaining on your lease, you have the legal right to stay until your contract expires.\n\nRecommended actions:\n• Keep copies of all rent payment receipts\n• Send a formal written response to your landlord\n• Contact MIZAN to prepare a legal notice if needed";
  }

  if (q.includes("visa") || q.includes("renew")) {
    return "For employment visa renewal in Dubai:\n\n1. Validity: Your visa must be renewed before expiry\n2. Sponsor: Your employer must initiate the renewal via GDRFA\n3. Documents needed: Valid passport, Emirates ID, medical fitness test, passport photos\n4. Timeline: 3-5 working days typically\n5. Fines: AED 50/day after expiry\n\nContact your HR department or open a chat to start the renewal process.";
  }

  if (q.includes("labor") || q.includes("complaint") || q.includes("mohre")) {
    return "To file a labor complaint with MOHRE:\n\n1. Visit the MOHRE website or app\n2. Log in with your Emirates ID\n3. Select 'New Complaint'\n4. Choose your employer\n5. Describe the issue in detail\n6. Attach supporting documents\n\nTypical resolution time: 14-30 days. For immediate assistance, call MOHRE helpline 600 590 000.";
  }

  if (q.includes("golden visa") || q.includes("investor")) {
    return "The UAE Golden Visa (10-year) is available for:\n\n• Investors (AED 2M+ property or AED 5M+ business investment)\n• Entrepreneurs with innovative projects\n• Specialized talents (doctors, engineers, scientists)\n• PhD holders and researchers\n• Outstanding students\n\nDocuments needed:\n• Investment proof\n• Valid passport\n• Medical fitness test\n• Emirates ID\n\nContact us to check your eligibility and start the application.";
  }

  return "Thank you for your question. UAE law covers a wide range of civil, commercial, and personal matters. To give you accurate guidance, could you provide more details about your situation?\n\nI can help with:\n• Landlord & tenant disputes\n• Employment & labor issues\n• Visa & immigration\n• Business contracts\n• Family law matters\n• Traffic & criminal cases";
}
