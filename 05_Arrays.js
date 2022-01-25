// Array objects
var array=new Array();
array[0]="Auro";
array[1]="Saswat";
array[2]="Raj";
for(var i=0;i<array.length;i++){
  document.write(array[i]+"<br>");
}

// Static allocation of elements inside an array
const carclose=["VOLVO","SANTRO","MERCEDES","I10","NANO"];
document.write("<br>"+"Cars Section showing static allocation of elements inside an Array"+"<br>");
for(var j=0;j<carclose.length;j++)
{
  document.write(carclose[j]+"<br>");
}

document.write("List of books <br>");
var book = new Array(6); // Create an Array object
document.write("Length of the Array is "+(book.length)+"<br>");
book[0] = "War and Peace"; // Assign values to its elements
book[1] = "Huckleberry Finn";
book[2] = "The Return of the Native";
book[3] = "A Christmas Carol";
book[4] = "The Yearling";
book[5] = "Exodus";
for(var i in book){
  document.write("<b>book["+i+"]</b>"+" is "+book[i]+"<br>");
}