// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc2NvgA2XpP5ayhQI2z3lFxb8oW9K-uYY",
  authDomain: "swasti-s-agent-dsfx.firebaseapp.com",
  projectId: "swasti-s-agent-dsfx",
  storageBucket: "swasti-s-agent-dsfx.appspot.com",
  messagingSenderId: "621146481712",
  appId: "1:621146481712:web:bc3685f4a42145aa4f79f5",
  measurementId: "G-SJM2N9Y12X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var userName= document.getElementById("username").value;

function logout(){
    localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "kwitter.html";
}

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}