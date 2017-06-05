// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
function convertToBinary(num) {
    var res=num.toString(2);
    while(res.length<8){
        res=0+res;
    }
   return res;
}
console.log(convertToBinary(65));