import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";



function subirOrden(mesa, productos, comentario) {
    try {
        const db = getFirestore()
        const docRef = addDoc(collection(db, "pedidos"), {
            mesa,
            productos,
            comentario,
        });
        console.log("YA SUBI A FIREBASE ", docRef.id);

    } catch (e) {
        console.error("NO PUDE SUBIR A FIREBASE ", e);
    }

}


function obtenerData() {
    try {
        const db = getFirestore()
        const querySnapshot = getDocs(collection(db, "pedidos"));
        querySnapshot.forEach((doc) => {
            console.log("la data firebase",`${doc.id} => ${doc.data()}`);
        });

    } catch (e) {
        console.error("Error al bajar datos ", e);
    }
}









export { subirOrden , obtenerData }