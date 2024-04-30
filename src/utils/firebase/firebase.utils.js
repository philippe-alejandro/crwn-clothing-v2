import { initializeApp } from 'firebase/app';
import { getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeU33F1N-ZbzLmWhdotQeJ0_xPzkCmCXE",
    authDomain: "crown-clothing-db-98c90.firebaseapp.com",
    projectId: "crown-clothing-db-98c90",
    storageBucket: "crown-clothing-db-98c90.appspot.com",
    messagingSenderId: "731791386843",
    appId: "1:731791386843:web:9a547e20ba98b91f3744fe",
    measurementId: "G-5PFLDFTJJ4"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        } catch(error) {
            console.log(error.message);
        }
    }
    return userDocRef;
  }