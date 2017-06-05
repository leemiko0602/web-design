//为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组 
function square(arr) {
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[arr1.length]=Math.pow(arr[i],2);
    }
    return arr1;
}
square([1, 2, 3, 4]);