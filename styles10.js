var num = parseInt(prompt("Enter a number : "));
document.write("The number is : "+ num);
fact = 1;
if(num <= 1){
    fact = 1;
}
else{
    for(var i = num; i >=1; i--){
        fact *= i; 
    }
}
document.write("<br> Factorail is : " + fact);
