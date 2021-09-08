import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyATQsBzv31a2sQ-7PaC6RbtFGr8VWWyJ_w",
    authDomain: "crwn-db-444ea.firebaseapp.com",
    projectId: "crwn-db-444ea",
    storageBucket: "crwn-db-444ea.appspot.com",
    messagingSenderId: "613254218325",
    appId: "1:613254218325:web:3197e62b9fb0e3940d4adc",
    measurementId: "G-GCR6TZ26R4"
  };

  export const createUSerProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
      
    }
    return userRef;
  }
  
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  