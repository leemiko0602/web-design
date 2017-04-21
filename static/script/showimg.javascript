window.onload=function(){
// 左侧图片监听方法
var img=document.getElementById("cat");
var pic=document.getElementById("hide");
img.addEventListener("click",function(){
      hide.setAttribute("src","./static/img/p8451114.jpg");
},false); 
pic.addEventListener("click",function(){
    hide.setAttribute("src","");
})
}