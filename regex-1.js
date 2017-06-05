function regex(str){
if(!str) return;
if(typeof str !=="string") return;
return /.[aeiou]/.test(str.charAt(str));
}
console.log(regex('guiou'));