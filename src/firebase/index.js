import firebase from 'firebase';

let fire = firebase.initializeApp({
  apiKey: 'AIzaSyDRWMlNYVnrz4k1vI8HDUCeJKmBwjETsGo',
  authDomain: 'pro-cons-decider.firebaseapp.com',
  projectId: 'pro-cons-decider'
});

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default fire;
