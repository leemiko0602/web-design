function functionFunction(str) {
    return function f(str1){   
            return str+', '+str1;
           }
}
console.log(functionFunction('Hello')('world'));