function timeout(){
    for(var i=0;i<6;i++){
        (function(j){
            setTimeout(function(){
             console.log(j);   
         },1000*j)
        })(i);
    }
}
timeout();