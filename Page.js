//firebase code start
var firebaseConfig = {
    apiKey: "AIzaSyAXV32qT31nkvfAdzLvw3YEXY45ctKUMvA",
    authDomain: "project---94-213f4.firebaseapp.com",
    databaseURL: "https://project---94-213f4-default-rtdb.firebaseio.com",
    projectId: "project---94-213f4",
    storageBucket: "project---94-213f4.appspot.com",
    messagingSenderId: "744389143447",
    appId: "1:744389143447:web:6003c71eeb415cd5f3b2d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//firebase code end
function logout()
{
    localStorage.removeItem("User name");
    localStorage.removeItem("room name");
    window.location = "i.html";
}
user_name = localStorage.getItem("User name");
room_name = localStorage.getItem("room name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}