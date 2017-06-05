//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function prepend(arr, item) {
      var arr1=[];
    for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i];
    }
    arr1.unshift(item);
    return arr1;
}