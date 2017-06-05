//删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组 
function curtail(arr) {
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i];
    }
    arr1.shift();
    return arr1;
}
