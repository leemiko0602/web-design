//通过率80%
function containsRepeatingLetter(str) {
    var arr=str.split("");
    arr.sort();
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            return true;
            break;
        }
    }
    return false;

}
//正则表示式匹配
function containsRepeatingLetter(str) {
     return /([a-zA-Z])\1/.test(str);
 }
console.log(containsRepeatingLetter("sddbew"));