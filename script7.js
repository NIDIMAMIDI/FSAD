var num = parseInt(prompt("Enter array size : "));
document.write("Array size is : "+ num);
var arr=[];

for(var i = 0; i < num; i++){
    arr.push(parseInt(prompt("Enter array elements are : ")))
}
document.write("<br>Array is : "+ arr);
var sum = 0;
for(var i=0; i < num; i++){
    sum = sum+arr[i];
}
document.write("<br>Average of Array Elements is : "+ (sum/num));
