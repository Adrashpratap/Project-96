//firbase code
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
//firebase complete
user_name = localStorage.getItem("User name");
document.getElementById("h3").innerHTML = "Welcome " + user_name;

function logout()
{
    localStorage.removeItem("User name");
    window.location = "i.html";
}
function addroom()
{
    user_name = document.getElementById("input_2").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding user"
    });

    localStorage.setItem("room name",user_name);
    window.location = "Page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room name" + room_name);
      row = "<div class = 'room_name' id = "+room_name+"onclick = 'redirectToRoomName(this.id)' >#"+ room_name + "</div><hr>;"
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room name" , name);
      window.location = ("Page.html");
}