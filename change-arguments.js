function callIt(fn) {
    return fn.apply(this,Array.prototype.slice.call(arguments,1));
}