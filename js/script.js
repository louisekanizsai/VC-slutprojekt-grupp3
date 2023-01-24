// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL: 'https://vc-slutprojekt-grupp4-default-rtdb.europe-west1.firebasedatabase.app/',
    apiKey: "AIzaSyD1l-NXN8r-Cvi1XrFO3oEgtDhwGfeaDvE",
    authDomain: "vc-slutprojekt-grupp4.firebaseapp.com",
    projectId: "vc-slutprojekt-grupp4",
    storageBucket: "vc-slutprojekt-grupp4.appspot.com",
    messagingSenderId: "559571095134",
    appId: "1:559571095134:web:0e5635665f81596885eecf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log(db);


// Detect if user is new or not
let userId = 0;

const isNew = localStorage.getItem('visit') == null;
if(isNew){
    localStorage.setItem('visit', '.');
    //New user 
    userId++;
    console.log(userId);
} else{
    //User is not new
}

// Write data
function writeUserData() {
    set(ref(db, userId), {
        message: `This is a message from User: ${userId}`
    });
}

writeUserData();


// Read data (only once)
onValue(ref(db, 'Eddie'), (snapshot) => {
    const data = snapshot.val();
    alert(data.message);
}, { onlyOnce: true }
);





//Remove shit
remove(ref(db, 'Henrik')).then(() => {
    console.log('Henrik removed');
});
