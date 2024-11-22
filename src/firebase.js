import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCdfO6lT8DEmi0LnkxGSwxbSDMb4utNvr0",
  authDomain: "nutflix-f3388.firebaseapp.com",
  projectId: "nutflix-f3388",
  storageBucket: "nutflix-f3388.appspot.com",
  messagingSenderId: "574791720145",
  appId: "1:574791720145:web:654cff5abd338756f739f0",
  measurementId: "G-9JKV0VCB86",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = ()=>{
  signOut(auth);
}

export {auth,db,login,signUp,logout};
