import firebase from 'firebase';

const configuration = {
    apiKey: "AIzaSyAvti1REJYSTMvutsT3OaaFjN_y61I0sdw",
    authDomain: "red-social-react-3a3de.firebaseapp.com",
    databaseURL: "https://red-social-react-3a3de.firebaseio.com",
    projectId: "red-social-react-3a3de",
    storageBucket: "red-social-react-3a3de.appspot.com",
    messagingSenderId: "603868093948"
}

const credentials = firebase.initializeApp(configuration);

export default credentials;