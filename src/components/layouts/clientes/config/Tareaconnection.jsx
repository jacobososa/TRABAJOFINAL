import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpqnGRL3VSW10eLGNkPM0oamkN9C8WXtA",
  authDomain: "tareas-clientes.firebaseapp.com",
  projectId: "tareas-clientes",
  storageBucket: "tareas-clientes.appspot.com",
  messagingSenderId: "799989184242",
  appId: "1:799989184242:web:7b8b61cb638a23405f026b"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
