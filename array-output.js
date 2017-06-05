//将数组输出3遍
function Out(arr){
  this.arr=arr;
  
}
Out.prototype.output=function(){
    var res=this.arr.join(",");
    for(var i=0;i<3;i++){
       console.log(res);
    //    console.log(res.slice(0,1));
    }
}
var print=new Out([1,2,3]);
print.output();