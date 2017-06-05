//在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function append(arr, item) {
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[arr1.length]=arr[i];
    }
    arr1[arr1.length]=item;
    return arr1;

}