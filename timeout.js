function count(start, end) {
 /*if(start <= end){
        console.log(start);
        start++;
        st = setTimeout(function(){count(start, end)}, 100);
    }
    return {
        cancel: function(){clearTimeout(st);}
    }*/
    // console.log(start++);
    // var res=setInterval(function(){
    //         if(start<=end){
    //             console.log(start++);
    //         }
    //         else{
    //             clearInterval(res);
    //         }
    //         },100);
            return function  (){
                    return 2;
                    console.log(2);
                    // clearInterval(res);
                }

}
var s=count();
console.log(s());