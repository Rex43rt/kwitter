
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyC_BriFvD_vge2j3cHw7yjp9UmkBPYWDM8",
      authDomain: "kwitter-63b09.firebaseapp.com",
      databaseURL: "https://kwitter-63b09-default-rtdb.firebaseio.com",
      projectId: "kwitter-63b09",
      storageBucket: "kwitter-63b09.appspot.com",
      messagingSenderId: "954832134185",
      appId: "1:954832134185:web:9abc66c1dabdc688f77c38"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="!Bienvenido "+user_name+"¡";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"agregando nombre de sala"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}