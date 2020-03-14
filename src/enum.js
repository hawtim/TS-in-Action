"use strict";
// 枚举类型： 一组有名字的常量集合
// 反向映射
// 数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter);
console.log(Role);
// 字符串枚举
// 不能进行反向映射
var Message;
(function (Message) {
    Message["Success"] = "\u6210\u529F";
    Message["Fail"] = "\u5931\u8D25";
})(Message || (Message = {}));
console.log(Message);
// 枚举成员
var Char;
(function (Char) {
    // const 常量枚举，编译时计算出结果
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // computed 需要被计算的枚举成员
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
// e === f 不同枚举类型不可比较
var e1 = 1;
var e2;
// e1 === e2
var e3 = 1;
e1 === e3; // 相同类型可以比较
var g1 = G.b;
var g2 = G.a;
function initByRole(role) {
    switch (role) {
        case 1 /* Reporter */:
        case 2 /* Developer */:
            // do some report or develop
            break;
        case 3 /* Maintainer */:
        case 4 /* Owner */:
            // do maintain or own
            break;
        case 5 /* Guest */:
            // do guest
            break;
        default:
        // do something else
    }
}
