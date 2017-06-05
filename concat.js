//合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
function concat(arr1, arr2) {
    var arr3=[];
    for(var i=0;i<arr1.length;i++){
        arr3[i]=arr1[i];
    }
    for(var j=0;j<arr2.length;j++){
        arr3[arr3.length]=arr2[j];
    }
    return arr3;
}