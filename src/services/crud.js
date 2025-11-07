import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function AddUser() {
    try {
        await addDoc(collection(db, "users"), {
            name: "Henrique",
            email: "henrique@gmail.com",
            createdAt: new Date()
        });
        console.log("Usuário adicionado com sucesso!");
    } catch (e) {
        console.error("Erro ao adicionar usuário: ", e);
    }
}
