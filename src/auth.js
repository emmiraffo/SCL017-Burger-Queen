
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"



function singUp () {
    const auth = getAuth();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log ('estou tocado')
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log ('entré')
        // ...
      })
      .catch((error) => {
        console.log (error)
      
      });
}


export default singUp