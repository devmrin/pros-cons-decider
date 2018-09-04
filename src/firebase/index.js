import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCe6lQ8EDeCG4TYIS_X7NAolAOpiQNx00E',
  authDomain: 'decider-ec344.firebaseapp.com',
  projectId: 'decider-ec344'
});

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

let docRef = firestore.doc('pros-cons/data');

export default docRef;
