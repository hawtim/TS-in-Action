class testAnimal {
  // private 定义的属性, 无法在实例中访问，也无法在子类中访问, 编译后的代码不受限制
  // private name: string;
  // protected 同样不允许在实例中访问，但允许在子类中访问
  protected name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

let a = new testAnimal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';

class testCat extends testAnimal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
}


class test2Animal {
  public name: string;
  private constructor(name) {
    this.name = name;
  }
}
class test2Cat extends test2Animal {
  constructor(name: string) {
    super(name);
  }
}

let a = new test2Animal('Jack');


class test3Animal {
  // public name: string;
  public constructor(public readonly name: string) {
    // this.name = name;
  }
}

let a3: test3Animal = new test3Animal('Jack');
console.log(a3.name); // Jack
a3.name = 'Tom';


abstract class test4Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): string;
  public abstract sayNo(): string;
}

class test4Cat extends test4Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
  public sayHi() {
    return 'Hi'
  }
  public sayNo() {
    return 'No'
  }
}

let cat4 = new test4Cat('Tom');