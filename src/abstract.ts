// 抽象类，只能被实例化，不能继承
// 抽象类可以抽离出代码的共享，利于复用和拓展

abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog = new Dog('wwww')
dog.eat()
// dog.sleep()

// 实现多态

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}

let cat = new Cat()

let animals: Animal[] = [dog, cat]
// 不同实现
animals.forEach(item => {
  item.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class myFlow extends WorkFlow {
  next() {
    return this
  }
}

// 调用自身的方法，再调用父类，再调用子类，再调用父类
new myFlow().next().step1().next().step2()