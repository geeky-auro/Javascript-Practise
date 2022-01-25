// A Function is much the same as a Procedure or a Subroutine, in other programming languages.
function dialogBox(){
  window.alert("This is an Alert Box"+" Welcome to JS Output Section");
}

// Sum of Two Numbers
function sum(){
  var a=10;
  var b=20;
  return (a+b);
}


function display(){
  document.write("Sum of A and B is "+sum());
}

function factorial(a){
  if(a==0){
    return 1;
  }
  else if(a==1){
    return 1;
  }
  else{
    return a *factorial(a-1);
  }
}

function displayRecursiveFacotrial(){
  document.write(factorial(5));  
}

