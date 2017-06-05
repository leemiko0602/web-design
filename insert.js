//在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i];
    }
    arr1.splice(index,0,item);
    return arr1;

}