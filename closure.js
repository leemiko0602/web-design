function makeClosures(arr, fn) {
    var result=[];
        for(var i=0;i<arr.length;i++){
           (function(j){
                result.push(function(){
                  return  fn(j);
                });})(arr[i]);
        }
    return result;
}
var arr = [1, 5, 3]; 
var square = function (x) { 
	return x * x; 
}; 
var funcs = makeClosures(arr, square); 
console.log(funcs[1]());
