function partial(fn, str1, str2) {
   return function result(str3){
       return fn.call(this,str1,str2,str3);
   }
}
var sayIt = function(greeting, name, punctuation) {     
    return greeting + ', ' + name + (punctuation || '!'); 
};  
// console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));
console.log(sayIt('Hello', 'Ellie'));