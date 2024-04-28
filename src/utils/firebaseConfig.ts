import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATzgJK2nTkC1J-0UaLIRQl11VCCsWyfis",
  authDomain: "pokedex-14ad1.firebaseapp.com",
  projectId: "pokedex-14ad1",
  storageBucket: "pokedex-14ad1.appspot.com",
  messagingSenderId: "17938026831",
  appId: "1:17938026831:web:cacbdff8e76a909ef1353a",
  measurementId: "G-KNDWW8781T"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
