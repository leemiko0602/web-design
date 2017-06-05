// 解析url
function parse(str){
    if(typeof str!='string'){
        return {};
    }
    var paramObj={};
    var paramArr=decodeURI(str).split('?')[1].split('&');
    for(var i=0;i<paramArr.length;i++){
        var temp=paramArr[i].split('=');
        var key=temp[0];
        var value=temp[1]||true;
        //处理数字：很多人会忽略这里的类型判断
        if(typeof value==='string'&&isNaN(Number(value))==false){
            value=Number(value);
        }
        if(typeof paramObj[key]==="undefined"){
            paramObj[key]=value;
        }
       else{
           var newvalue=Array.isArray(paramObj[key])?paramObj[key]:[paramObj[key]];
           newvalue.push(value);
           paramObj[key]=newvalue;
       }
    }
    return paramObj;
}
console.log(parse("http://www.domain.com/?user=anonymous&id=123&id=456&city=北京&d&enabled"));

// function parse(str) {
//   if (typeof str !== 'string') {
//     return {};
//   }
//   var paramObj = {};
//   var paramArr = decodeURI(str).split('?')[1].split('&');
//   for (var i = 0; i < paramArr.length; i++) {
//     var tmp = paramArr[i].split('=');
//     var key = tmp[0];
//     var value = tmp[1] || true;

//     // 处理数字：很多人忽略这里的类型判断，布尔值传给 Number 也会解析出数字
//     if (typeof value === 'string' && isNaN(Number(value)) === false) {
//       value = Number(value);
//     }

//     if (typeof paramObj[key] === 'undefined') {
//       paramObj[key] = value;
//     } else {
//       var newValue = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];
//       newValue.push(value);
//       paramObj[key] = newValue;
//     }
//   }

//   return paramObj;
// }
console.log(encodeURI('www.baidu.com/?hj=234 &pes=12349'));