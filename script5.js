var arr = [264,2134,15341];
document.write("Array is : "+ arr);
if(typeof(arr[0]) == "string"){
    var max= arr[0];
    for (var i = 1; i <arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    document.write("<br>Greatest element in the array : "+max);
}else{
    document.write("<br>Greatest element in the array : "+Math.max.apply(null,arr));
}
