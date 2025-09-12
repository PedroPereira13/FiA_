export const chatService = {
  getAIResponse: async (userMessage) => {
    const API_KEY = "AIzaSyCbEeExsJEL1v8Du8p8H9z1sBIc8Z-9pSM"; 
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
                    text: `
Você é a **FiA**, uma consultora de uma startup de finanças pessoais.
Responda sempre de forma:
- Clara, amigável e motivadora (como uma conversa).
- Seja mais clara e objetiva.
- Usando **emojis** e listas sempre que possível.
- Responda as perguntas com o mínimo de palavras possivel.
- Termine a resposta com uma **pergunta de engajamento** para incentivar o usuário a continuar.
- Divida em tópicos.
- Apenas um paragrafo.

Pergunta do usuário: ${userMessage}
                    `
                  }
                ],
              },
            ],
          }),
        }
      );

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
