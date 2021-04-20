import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWjx3V2eCFuIRpirh6zWZBqaqa_VcZdJo",
  authDomain: "catering-rugu.firebaseapp.com",
  databaseURL: "https://catering-rugu.firebaseio.com",
  projectId: "catering-rugu",
  storageBucket: "catering-rugu.appspot.com",
  messagingSenderId: "390035633803",
  appId: "1:390035633803:web:0f8524e47a128e30ad868e",
  measurementId: "G-TGJ5MHWECG"
};
const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
//const storage = firebase.storage();
