function valueAtBit(num, bit) {
 var arr=num.toString(2).split("");
  return arr[arr.length-bit];
}
console.log(valueAtBit(128,8));