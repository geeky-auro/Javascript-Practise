// The predefined objects that are commonly used are the window and document objects.
/*Some objects are
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

// Form object

// Date Object
function Getdate(){
  var getdate=new Date();
  document.write(getdate);
  document.write("<br>");
  document.write("Present Year is "+getdate.getFullYear());
  document.write("<br>");
  document.write("Present month is "+getdate.getMonth());
  document.write("<br>");
  document.write("Present Day is "+getdate.getDay());
  document.write("<br>");
  document.write("Present Date is "+getdate.getDate());
  document.write("<br>");
  document.write("Get Present Minute "+getdate.getMinutes());
  document.write("<br>");
  document.write("Get Present Second "+getdate.getSeconds());
  document.write("<br>");  
}
document.write("<br>");
document.write("<br>");
document.write("<br>");
Getdate();

function Setdate(){
  document.write("<br>");
  var getdate=new Date();
  let assignDate=20;
  var a=getdate.setDate(assignDate)
  document.write("To set Date from present Date ("+getdate.getDate()+") to "+a.getDate());
}
Setdate();