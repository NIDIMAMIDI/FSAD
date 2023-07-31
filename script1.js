var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
var num3 = parseInt(prompt("Ener third number : "));
document.write("Numbers are : "+ num1+" "+ num2+" "+ num3);
console.log("Numbers are : "+ num1+" "+ num2+ " 2"+num3);
if((num1 > num2)&& (num1 > num3)){
    document.write("<br>Greattest Number is : "+ num1);
    console.log("Greatest Number is : "+ num1);

}
else if((num2 > num1)&& (num1 > num3)){
    document.write("<br>Greattest Number is : "+ num2);
    console.log("Greatest Number is : "+ num1);
}
else{
    document.write("<br>Greattest Number is : "+ num3);
    console.log("Greatest Number is : "+ num1);
}
