"use strict";
var bool = true;
var num = 123;
var str = 'aaaa';
var arr1 = [1, 2, 3];
var arr2 = [1, '2', 2, 3]; // Array 是范型接口
// 元组 限定数组的类型和个数
var tuple = [0, '1'];
// 元组越界
tuple.push(2);
console.log(tuple);
// 不能越界访问
// tuple[2]
// let add = (x: number, y: number) =>  x + y
// 函数定义
var compute;
// 函数实现
compute = function (a, b) { return a + b; };
var obj = { x: 1, y: 2 };
obj.x = 3;
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
var un = undefined;
var nu = null;
// 任何类型的子类型
num = undefined;
num = null;
// void
// undefined 不是保留字
var noReturn = function () { };
var x;
x = 1;
x = '2';
x = [];
x = function () { };
// never 永远不会有返回值
