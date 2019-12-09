// 对象类型的接口

interface List {
  readonly id: number
  name: string
  // [x: string]: any // 字符串索引签名
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++ // 只读属性不允许修改
  })
}

// 允许鸭式变形
let result = {
  data: [
    {
      id: 1, name: 'A', sex: 'male'
    },
    {
      id: 2, name: 'B', age: 10
    }
  ]
}

render(result)

// 可索引类型的接口

interface StringArray {
  [index: number]: string // 相当于字符串类型的数组
}

let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string
}


// 接口定义函数

// let add: (x: number, y: number) => number

// interface Add {
//   {x: number, y: number}: number
// }

type Add = (x: number, y: number) => number

let add: Add = (a, b) => a + b

interface Lib {
  (): void
  version: string
  doSomething(): void
}


function getLib() {
  let lib: Lib = (() => {}) as Lib // 类型断言
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()

let lib2 = getLib()
lib2()
lib2.doSomething()

