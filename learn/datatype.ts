let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'aaaa'

let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, '2', 2, 3] // Array 是范型接口
// 元组 限定数组的类型和个数
let tuple: [number, string] = [0, '1']
// 元组越界
tuple.push(2)
console.log(tuple)
// 不能越界访问
// tuple[2]

// let add = (x: number, y: number) =>  x + y

// 函数定义
let compute : (x: number, y: number) => number
// 函数实现
compute = (a, b) => a + b


let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

let s1: symbol = Symbol()
let s2 = Symbol()

console.log(s1 === s2)

let un: undefined = undefined
let nu: null = null

// 任何类型的子类型

num = undefined
num = null


// void
// undefined 不是保留字
let noReturn = () => {}

let x
x = 1
x = '2'
x = []
x = () => {}

// never 永远不会有返回值