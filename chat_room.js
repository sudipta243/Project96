
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi7VD1rxom4YYhp7i8UUhjSc8eXW3dvwc",
    authDomain: "kwittertest1.firebaseapp.com",
    databaseURL: "https://kwittertest1-default-rtdb.firebaseio.com",
    projectId: "kwittertest1",
    storageBucket: "kwittertest1.appspot.com",
    messagingSenderId: "106035845950",
    appId: "1:106035845950:web:e78eccbef321c3a95f2a6f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_messagePage.html";
  }
  
  function getData() 
  {  
      firebase.database().ref("/").on('value', function(snapshot) 
        { 
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr id='line'>";
        document.getElementById("output").innerHTML += row;
       
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_messagePage.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  