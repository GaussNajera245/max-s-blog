import * as firebase from 'firebase'
import 'firebase/firestore';

if (!firebase.apps.length) {

  const firebaseConfig = {
      apiKey: "AIzaSyCHEmUJqeoIsTH6eyJErHkX8U3Vbp7AhdU",
      authDomain: "maxblog-570eb.firebaseapp.com",
      databaseURL: "https://maxblog-570eb.firebaseio.com",
      projectId: "maxblog-570eb",
      storageBucket: "maxblog-570eb.appspot.com",
      messagingSenderId: "448477561533",
      appId: "1:448477561533:web:a99bae671dd5cda72e6dd4",
      measurementId: "G-F7KTVMEHY6"
    };

  firebase.initializeApp(firebaseConfig);
}

export{   
  firebase 
}