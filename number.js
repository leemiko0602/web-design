function fizzBuzz(num) {
    if(!num||typeof num !="number") return false;
    switch(true){
        case num%3==0&&num%5==0:
            return "fizzbuzz";
            break;
        case num%3==0:
            return "fizz";
            break;
        case num%5==0:
            return "buzz";
            break;
        default:
            return num;
   
    }
}
console.log(fizzBuzz(15));