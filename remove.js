//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 
function remove(arr, item) {
    if(item==null) return;
    if(arr.length==0)return;
    var arr2=new Array();
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==item){
            arr2.push(arr[i]);
        }
    }
return arr2;
}
console.log(remove([1,2,3,4,2],2));