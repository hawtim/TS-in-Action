"use strict";
// 泛型是不预先确定的数据类型，具体的类型在使用的时候才能确定
function log(value) {
    console.log(value);
    return value;
}
log(['a', 'v', 'b', 'c']);
log(['a', 'v', 'b', 'c']);
var myLog = log;
myLog('1');
