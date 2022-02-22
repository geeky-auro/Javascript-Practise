// The predefined objects that are commonly used are the window and document objects.
/*SOme objects are
Document
Window
Browser
Form
Math
Date
*/
// Document Object
document.write("<h1>Document Object</h1>");
document.writeln("To be written in a new line! with the help of writeln <br>");
document.write("To be written in a new line! not with the help of writeln");
// Window Object
function openwindow(){
open("/home.html","Home")

}

function closewindow(){
  close();
}

// Window object supports 3 types of message boxes

function Alertonly(){
  window.alert("Hit Ok to be safe..!");
}

function Confirmonly(){
  window.confirm("Select your preferences to proceed..!")
}

function Promptonly(){
  var getpassword=window.prompt("You are requested to Enter the Pwd","Password");
  var getpassword1=window.prompt("You are requested to Enter the Pwd","Password");
  
  if (getpassword != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + getpassword + "! How are you today?";
  }
  
  document.write("<br>");
  document.write("Entered Password is "+getpassword);
  document.write("<br>");
  document.write("Entered Password is "+getpassword1);
}