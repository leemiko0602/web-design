//计算给定数组 arr 中所有元素的总和 
function sum(arr) {
    var sum=0;
    arr.forEach(function(n){
        sum=sum+n;
    })
   return sum;
}