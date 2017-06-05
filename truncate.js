//删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 
function truncate(arr) {
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i];
    }
    arr1.splice(arr1.length-1,1);
    return arr1;
}