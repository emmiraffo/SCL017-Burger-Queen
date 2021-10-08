
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword , signOut } from "firebase/auth"



function singUp () {
    const auth = getAuth();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log ('estoy tocado')
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

function login() {
  const auth = getAuth();
  const email = document.getElementById('email1').value
  const password = document.getElementById('password1').value
  console.log ('estoy tocado')
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log ('inicie sesion' , user)
      window.location.href = '/bienvenida'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log ()
    });
}

function out () {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("ADIOS")
    window.location.href = '/'
  }).catch((error) => {
    // An error happened.
  });


}



export  {singUp , login , out }