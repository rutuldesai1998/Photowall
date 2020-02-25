import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBg6PVxDC6Z5ECYJVUvcRP1xnUGIJ-likA",
    authDomain: "photowall-49dd0.firebaseapp.com",
    databaseURL: "https://photowall-49dd0.firebaseio.com",
    projectId: "photowall-49dd0",
    storageBucket: "photowall-49dd0.appspot.com",
    messagingSenderId: "315056416062",
    appId: "1:315056416062:web:3c5bb298a2d6bb13c2786f",
    measurementId: "G-XD3YLVB20Z"
  };

firebase.initializeApp(config)

const database=firebase.database()

export {database}