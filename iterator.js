function iterate(obj) {
    var arr=[];
    for(var e in obj){
        if(obj.hasOwnProperty(e))
        {
        arr.push(e+": "+obj[e]);
        }
    }
   return arr;
}
var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip'; 
console.log(iterate(new C()));
