function s(){
   console.log(Array.prototype.slice.call(arguments,1));
}
s(1,3,4);