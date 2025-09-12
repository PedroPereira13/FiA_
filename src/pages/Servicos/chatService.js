export const chatService = {
  getAIResponse: async (userMessage) => {
    const API_KEY = "AIzaSyCbEeExsJEL1v8Du8p8H9z1sBIc8Z-9pSM"; 
    const MODEL = "gemini-1.5-flash"; 

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

      if (data.error) {
        console.error("Erro da API:", data.error);
        return "Erro na API: " + data.error.message;
      }

      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Desculpe, não consegui gerar uma resposta."
      );
    } catch (error) {
      console.error("Erro no código:", error);
      return "Desculpe, estou com problemas técnicos. Tente novamente mais tarde.";
    }
  },
};
