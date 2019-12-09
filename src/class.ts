// 类的实现
// class Dog {
//   constructor(name: string) {
//     this.name = name
//   }
//   public name: string
//   run() {}
//   readonly legs: number = 4
//   static food: string = 'bones'
//   private pri() {} // 只能在类本身调用，不能被实例或者子类调用
//   protected pro() {} // 只能在类或者子类中访问，不能在实例中访问
// }

// 类的修饰符：
// public 对所有都是可见的
// protected 只能在类本身或者子类中访问，不能在实例中访问
// protected constructor 类只能被继承，不能被实例化，相当于基类
// private 只能在类本身调用，不能被实例或者子类调用
// private constructor 类不能被继承，也不能被实例化
// readonly 必须要初始化，不能被修改
// static 只能通过类名来调用，不能用实例来访问，可以被子类继承

// console.log(Dog.prototype)

// let dog = new Dog('xx')
// console.log(dog)
// console.log(Dog.food)
// // dog.pri()
// // dog.pro()

// // “类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。

// // 实例属性必须被赋予初始值

// // 类的继承

// class Husky extends Dog {
//   constructor(name: string, public color: string) {
//     super(name)
//     this.color = color
//     // this.pri()
//     this.pro()
//   }
// }

// console.log(Husky.food)

// 类的成员修饰符，是 ts 对 js 的拓展
// 类的所有属性默认都是 public



