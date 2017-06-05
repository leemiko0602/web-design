//在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    if(arr.length==0) return;
    if(!target) return;
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
            arr1[arr1.length]=i;
        }
    }
    return arr1;

}
findAllOccurrences('abcdefabc'.split(''), 'a').sort();