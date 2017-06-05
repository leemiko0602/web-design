//统计数组 arr 中值等于 item 的元素出现的次数 
function count(arr, item) {
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            count++;
        }
    }
    return count;
}
count([1,2,3,3,4,3],2);