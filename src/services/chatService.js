export const chatService = {
  getAIResponse: async (userMessage) => {

    const API_KEY = "AIzaSyCq3AQRBwiuXcT4VbU5uLJD1u-AXo57S40";
    const MODEL = "gemini-2.5-flash";

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Você é a FinAI, consultora financeira. Seja clara, objetiva e use emojis. Responda em português de forma concisa.

Pergunta: ${userMessage}`,
                  },
                ],
              },
            ],
            generationConfig: {
              maxOutputTokens: 250,
            },
          }),
        }
      );

      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Erro ao gerar resposta."
      );
    } catch (error) {
      console.error("Erro na IA:", error);
      return "Problema técnico. Tente novamente.";
    }
  },
};