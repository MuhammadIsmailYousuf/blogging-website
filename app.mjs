let email = document.getElementById('signup-email')
let password = document.getElementById('signup-password')
let button = document.getElementById('btns')



import { getAuth, createUserWithEmailAndPassword } from "./firebase.mjs";

button.addEventListener('click', function(){

  // const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
    // ..
    
  });
  
})
