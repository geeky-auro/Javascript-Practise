
function comparisionOperator(){
var a=10;
var b=20;
document.write("Output of a==b is "+ (a==b));
document.write("<br>");
document.write("Output of a===b is "+ (a===b));
document.write("<br>");
document.write("Output of a>b is "+ (a>b));
document.write("<br>");
document.write("Output of a<b is "+ (a<=b));
document.write("<br>");
document.write("<br>");
document.write("Output of a>b is "+ (a>b));

}

function bitWiseOperator(){
  var a=10;
  var b=20;
  document.write("<br>");
  document.write("\"a=10\" and \"b=20\"");
  document.write("<br>");
  document.write("Bitwise AND (a==a) & (b==b) is " + ((a==a) & (b==b)));
  document.write("<br>");
  document.write("Bitwise OR (a==b) | (b==b) is " + ((a==b) | (b==b)));
  document.write("<br>");
  document.write("Bitwise XOR (b==a) ^ (b==b) is " + ((b==a) ^ (b==b)));
  document.write("<br>");
  document.write("Bitwise NOT ~39 is " + (~39));
  document.write("<br>");
  document.write("Bitwise Left Shift 5 << 2 is " + (5<<2));
  //1001->100100->16+4->20 
  document.write("<br>");
  document.write("Bitwise Right Shift 8 >> 2 is " + (8>>2));
  //1000->0010->2
  document.write("<br>");
  document.write("Bitwise Right Shift with Zero  8>>> 2 is " + (8>>>2));
  //1000->1000

}
// Demonstrate Delete Operator
const Employee={
  firstname:'John',
  lastname:'Doe'
}
document.write("<br>");
document.write(Employee.firstname);
document.write(" "+Employee.lastname);
document.write("<br>");

delete Employee.firstname;
document.write(Employee.firstname);
document.write("<br>")
// OR
delete Employee['lastname'];
document.write(Employee.lastname);
document.write("<br>");

// Demonstrate In operator
const car = { make: 'Honda', model: 'Accord', year: 1998 };
document.write("Before Deleting "+car.make);
document.write("<br>")
delete car.make;
// 'make' in car -> false
if ('make' in car === false) {
  car.make = 'Suzuki';
}
document.write("After Deleting "+car.make);
document.write("<br>")

// Demonstration of instanceOf operator->(object instance of class)
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
document.write("auto instanceOf Car:"+(auto instanceof Car));
document.write("<br>")

// Demonstration of typeof operator
document.write(typeof auto);
// Object
document.write("<br>");
document.write(typeof 45);
// Number
document.write("<br>");
document.write(typeof 'Auro');
// String
document.write("<br>");
document.write("<b><i>Italics-Bold txt in JS</i></b><br>")
function operators(){
  comparisionOperator();
  bitWiseOperator();
}
operators();