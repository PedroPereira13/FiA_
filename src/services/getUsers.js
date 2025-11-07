import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function GetUsers() {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
}