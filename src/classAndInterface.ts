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

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
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

