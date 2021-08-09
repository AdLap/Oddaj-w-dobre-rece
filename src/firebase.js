import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKa4dy-RhPrxHLlz0ybUtfiYjGrnYsyMA",
    authDomain: "oddaj-rzeczy-5dccc.firebaseapp.com",
    projectId: "oddaj-rzeczy-5dccc",
    storageBucket: "oddaj-rzeczy-5dccc.appspot.com",
    messagingSenderId: "347645769526",
    appId: "1:347645769526:web:e48739738e8a661cfb2597"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }
export default firebase;
