
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

   

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-4IrFxM32dBkgTbt3Q1HZbGBZ7XGwXCU",
    authDomain: "section-j.firebaseapp.com",
    projectId: "section-j",
    storageBucket: "section-j.appspot.com",
    messagingSenderId: "712424630792",
    appId: "1:712424630792:web:8bb276e3311af2f67dffbd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    createUserWithEmailAndPassword,
    app,
    auth
}
