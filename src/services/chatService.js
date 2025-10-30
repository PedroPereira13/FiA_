export const chatService = {
  getAIResponse: async (userMessage) => {
    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyCbEeExsJEL1v8Du8p8H9z1sBIc8Z-9pSM";
    const MODEL = "gemini-1.5-flash";

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
                    text: `Você é a FinAI, consultora financeira. Seja claro, objetivo e use emojis. Responda em português de forma concisa.

Pergunta: ${userMessage}`
                  }
                ],
              },
            ],
            generationConfig: {
              maxOutputTokens: 250,
            }
          }),
        }
      );

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "quero sexo";
      
    } catch (error) {
      console.error("Erro:", error);
      return "😕 Problema técnico. Tente novamente.";
    }
  },
};

