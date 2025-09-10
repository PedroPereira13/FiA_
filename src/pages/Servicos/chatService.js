export const chatService = {
  getAIResponse: async (userMessage) => {
    const API_KEY = "AIzaSyCbEeExsJEL1v8Du8p8H9z1sBIc8Z-9pSM"; // Sua chave do Gemini
    const MODEL = "gemini-2.5-flash-lite"; // Modelo que você quer usar

    try {
      const response = await fetch("https://api.google.com/gemini/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          prompt: userMessage,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices?.[0]?.text?.trim() || "Desculpe, não consegui gerar uma resposta.";
    } catch (error) {
      console.error("Erro na IA:", error);
      return "Desculpe, estou com problemas técnicos. Tente novamente mais tarde.";
    }
  },
};
