//将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
    return  fn.apply(this,arr);
}
argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']);
