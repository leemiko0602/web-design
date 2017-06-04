//闭包即可以访问另外一个函数作用域中变量的函数，闭包还可以保持变量在内存中
function closure(){
    var id = 123;
    var name = "leo";
    return function(){
        return "this is "+id+",name is "+name
    }

}
console.log(closure()());
