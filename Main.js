function addUser()
{
    user = document.getElementById("input_1").value;
    localStorage.setItem("User name",user);
    window.location = "Room.html";
}