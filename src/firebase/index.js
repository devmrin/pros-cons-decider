import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDRWMlNYVnrz4k1vI8HDUCeJKmBwjETsGo',
  authDomain: 'pro-cons-decider.firebaseapp.com',
  projectId: 'pro-cons-decider'
});

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

let docRef = firestore.doc('pros-cons-data/state');

export default docRef;
