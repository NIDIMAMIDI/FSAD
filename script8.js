var range = parseInt(prompt("Enter the range : "));
document.write("Range is : "+ range);
document.write("<br>Prime Numbers are : ");
for (var i = 2; i <= range; i++){
    var flag = 0;
    for(j = 1; j<=i; j++){
        if(i % j == 0){
            flag += 1;
        }
    }
    if(flag == 2){
        document.write(i+" ");
    }
}