import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCByVX43on5APWGBvpeAwPqZ6pQ8Mdf3IA",
  authDomain: "prodatalk.firebaseapp.com",
  databaseURL: "https://prodatalk.firebaseio.com",
  projectId: "prodatalk",
  storageBucket: "prodatalk.appspot.com",
  messagingSenderId: "730754155815",
  appId: "1:730754155815:web:c03c312426ac0ffdbed502"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
