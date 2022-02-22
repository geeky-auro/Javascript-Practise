var person={
  firstName:"john",
  lastName:"DOE",
  phoneNumber:987745513,
  eyeColor:"BLUE"
}

// To access each property..!
document.write("<br>"+person.firstName+" is a good boy");
document.write("<br>");

// Creating Objects in JS by Object literal method
document.writeln("<h2>Creating Objects in JS by Object literal method</h2>");
var emp={Fname:"Auro Saswat Raj",Salary:50000,Subjects:["Maths","Engineering Mech","OS"],fullprofile:function(){
  return this.Fname+" "+this.Salary+" "+this.Subjects+"<br>";
}}
document.writeln(emp.fullprofile());
document.writeln(emp.Fname+" has "+emp.Salary+" as his basic pay and courses acquired by him is "+emp.Subjects[0]);

// Initializer block..!
function initializer(id,name,percentage){
  this.id=id;
  this.name=name;
  this.percentage=percentage;
}
document.write("<br>");
emp1=new initializer(1,"Aman Agrwal",55.5);
document.write("Student Details:"+emp1.id+" "+emp1.name+" "+emp1.percentage+"<br>");
emp1.percentage=78.9;
document.write("Edited..!<br>");
document.write("Student Details:"+emp1.id+" "+emp1.name+" "+emp1.percentage+"<br>");