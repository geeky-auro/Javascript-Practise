// For loop should be used if number of iteration is known.
var i;
for (i=1; i<=5; i++) 
{ 
document.write(i + "<br/>");
} 
// The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.
var i=0;
while(true){
i++;
document.write("Count Number "+i+"<br>");
if(i==5){
  break;
}
}
// The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false.
var i=21; 
do{ 
document.write(i + "<br/>"); 
i++; 
} while (i<=25);

