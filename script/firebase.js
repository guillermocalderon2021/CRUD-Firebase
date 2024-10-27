import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import {getFirestore,collection, addDoc, getDocs,getCountFromServer, deleteDoc, 
    doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "",
    authDomain: "prueba-2da8b.firebaseapp.com",
    projectId: "prueba-2da8b",
    storageBucket: "prueba-2da8b.appspot.com",
    messagingSenderId: "720913546414",
    appId: "1:720913546414:web:30db46cd86d43b023dc13f",
    measurementId: "G-9BMJHVQ3Q7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore()

  export const saveProduct=(product)=>{
    addDoc(collection(db,'products'),product);
  }

  export const getProducts=()=>getDocs(collection(db,'products'))

  export const getProduct=(id)=>getDoc(doc(db,'products',id))

  export const getProductListSize=async()=>{
    const products = collection(db, "products");
    const snapshot = await getCountFromServer(products);
    return snapshot.data().count;
  }

export const deleteProduct=(id)=> deleteDoc(doc(db,'products',id))

export const updateProduct=(id, newFields)=>updateDoc(doc(db,'products',id), newFields)

