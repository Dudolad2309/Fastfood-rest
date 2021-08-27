import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBJrJ1wD2Lj4Ao45Y9BOGVFp-iy0uNh6nM",
	authDomain: "burger-42275.firebaseapp.com",
	databaseURL: "https://burger-42275-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
