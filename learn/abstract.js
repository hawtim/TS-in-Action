"use strict";
// 抽象类，只能被实例化，不能继承
// 抽象类可以抽离出代码的共享，利于复用和拓展
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.sleep = function () {
        console.log('dog sleep');
    };
    return Dog;
}(Animal));
var dog = new Dog('wwww');
dog.eat();
// dog.sleep()
// 实现多态
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('Cat sleep');
    };
    return Cat;
}(Animal));
var cat = new Cat();
var animals = [dog, cat];
// 不同实现
animals.forEach(function (item) {
    item.sleep();
});
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2();
var myFlow = /** @class */ (function (_super) {
    __extends(myFlow, _super);
    function myFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myFlow.prototype.next = function () {
        return this;
    };
    return myFlow;
}(WorkFlow));
// 调用自身的方法，再调用父类，再调用子类，再调用父类
new myFlow().next().step1().next().step2();
