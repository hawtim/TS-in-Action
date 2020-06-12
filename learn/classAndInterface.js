"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 接口只能约束类的共有成员
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var man = {
    name: '',
    eat: function () { },
    run: function () { }
};
var boy = {
    name: '',
    run: function () { },
    eat: function () { },
    cry: function () { },
};
// 接口继承类
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 1;
    }
    return C;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
// 接口之间是可以相互继承的，能够实现接口的复用 extends 
// 类之间也可以相互继承，实现属性和方法的复用 extends
// 接口可以通过类来实现
// 也就是 class C implements AutoInterfate
// 接口只能约束类的公有成员
// 接口能抽离出类的成员
// 能抽离出公有成员，私有成员，受保护成员
// interface AutoInterface extends Auto {
