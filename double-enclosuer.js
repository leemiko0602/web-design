function partialUsingArguments(fn) {
       var args=Array.prototype.slice.call(arguments,1);
        return function result(){
            return fn.apply(this,args.concat(Array.prototype.slice.call(arguments,0)));
        }
}
var a = 1; var b = 2; 
var c = 3; var d = 4;
var test = function (first, second, third, forth) {return first + second + third + forth;};
console.log(partialUsingArguments(test, a, b)(c, d));
