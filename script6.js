var arr = ["sharuk", "mushu", "shannu"];
document.write("Array is : "+ arr);
if(typeof(arr[0]) == "string"){
    var min= arr[0];
    for (var i = 1; i <arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    document.write("<br>Smallest element in the array : "+min);
}else{
    document.write("<br>Smallest element in the array : "+Math.min.apply(null,arr));
}