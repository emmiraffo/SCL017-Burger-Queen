import { collection, addDoc , getFirestore} from "firebase/firestore";



function subirOrden (mesa,productos, comentario) {
    try {
        const db = getFirestore()
        const docRef = addDoc(collection(db, "pedidos"), {
            mesa,
            productos,
            comentario,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}







export {subirOrden}