
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDrm9SePjKGmSRzg8SJOs-vg2lmScK1sXA",
      authDomain: "kwitter-6f022.firebaseapp.com",
      projectId: "kwitter-6f022",
      storageBucket: "kwitter-6f022.appspot.com",
      messagingSenderId: "308671832869",
      appId: "1:308671832869:web:c20f3dc45524159508f0cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
window.location="login.html"