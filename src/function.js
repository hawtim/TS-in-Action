"use strict";
// 接口定义函数
var add = function (a, b) { return a + b; };
function getLib() {
    var lib = (function () { }); // 类型断言
    lib.version = '1.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
lib2();
lib2.doSomething();
function add5(x, y) {
    return y ? x + y : x;
}
add5(1, 2);
function add6(x, y, z, q) {
    if (y === void 0) { y = 0; }
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
console.log(add6(1, undefined, 2));
function add7(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
console.log(add7(1, 2, 3, 4, 5));
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add8(1, 2, 3, 4, 5));
console.log(add8('1', '2', '3', '4', '5'));
