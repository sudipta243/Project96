function addUser(){
    new_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",new_name);
    window.location="chat_room.html";
}