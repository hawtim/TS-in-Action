interface Human {
  name: string,
  eat(): void
}

// 接口只能约束类的共有成员

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  sleep() {}
}

// 接口可以和类一样相互继承

interface Man extends Human {
  run(): void
}

let man: Man = {
  name: '',
  eat() {},
  run() {}
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {},
}

// 接口继承类

class Auto {
  state = 1
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {
  
}

// 接口之间是可以相互继承的，能够实现接口的复用 extends 
// 类之间也可以相互继承，实现属性和方法的复用 extends

// 接口可以通过类来实现
// 也就是 class C implements AutoInterfate
// 接口只能约束类的公有成员


// 接口能抽离出类的成员
// 能抽离出公有成员，私有成员，受保护成员

// interface AutoInterface extends Auto {

