// for(var i=0;i<5;i++)
// {
//     setTimeout(function(){
//     console.log(new Date,i);
//     },1000);
// }
//console.log(new Date, i);
//5->55555


// for(var i = 0; i<5;i++){
//     (function(j){ //j=i
//     setTimeout(function(){
//     console.log(new Date,j);
// },1000);
// })(i);
// }
// console.log(new Date, i);
// //5->0,1,2,3,4

for (var i = 0; i < 5; i++) {
    (function (j) { //j=i
        setTimeout(function () {
            console.log(new Date, j);
        }, 1000 * j);
    })(i);
}
setTimeout(function () {
    console.log(new Date, i);
}, i * 1000);
// 1->2->3->4->5


https://zhuanlan.zhihu.com/p/25855075