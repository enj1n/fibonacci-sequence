//First method with For statement


var x1=0;
var x2=1;
var x3;
var number=prompt("Enter a limitation");
document.write(x1+"<br/>");
document.write(x2+"<br/>");
for (var i=3; i<number; i++)
{ x3=x1+x2;
x1=x2;
x2=x3;

document.write(x3+<br/>);
}
