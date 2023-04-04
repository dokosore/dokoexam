const firebaseConfig = {
  apiKey: 'AIzaSyC4ykKEZSjplDvziD4Fs6vNTJWNCxmAtUQ',
  authDomain: 'dokoexam.firebaseapp.com',
  databaseURL: 'https://dokoexam-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dokoexam',
  storageBucket: 'dokoexam.appspot.com',
  messagingSenderId: '230654918336',
  appId: '1:230654918336:web:85339e6cf0670238e4b725',
  measurementId: 'G-SRL1R3T32B',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
