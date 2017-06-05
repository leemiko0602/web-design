//判断是否包含数字
function containsNumber(str) {
    if(!str) return;
     var arr=str.split("");
     for(var i=0;i<arr.length;i++){
         if(arr[i]>=0&&arr[i]<=9){
             return true;
             break;
         }
     }
    return false;
}
console.log(containsNumber('abc123'));
//判断是否包含连续重复的字符
function containsRepeatingLetter(str) {
     return /([a-zA-Z])\1/.test(str);
 }
//判断最后一位字母是否包含元音字符
function endsWithVowel(str) {
    if(!str) return false;
    var tail=str.charAt(str.length-1);
    switch(tail.toLowerCase()){
        case 'a':return true;break;
        case 'e':return true;break;
        case 'i':return true;break;
        case 'o':return true;break;
        case 'u':return true;break;
        default:return false;
    }

}