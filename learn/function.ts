// 接口定义函数

// let add: (x: number, y: number) => number

// interface Add {
//   {x: number, y: number}: number
// }

type Add = (x: number, y: number) => number

let add: Add = (a, b) => a + b

// 混合类型接口
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


function add5(x: number, y?: number) { // 可选参数必须位于必选参数之后
  return y ? x + y : x
}

add5(1, 2)


function add6(x: number, y = 0, z: number, q = 1) { // 可选参数必须位于必选参数之后
  return x + y + z + q
}

console.log(add6(1, undefined, 2))


function add7(x: number, ...rest: number[]) { // 剩余参数
  return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add7(1, 2, 3, 4, 5))

// 函数重载

function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log(add8(1, 2, 3, 4, 5))
console.log(add8('1', '2', '3', '4', '5'))