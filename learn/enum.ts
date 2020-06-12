// 枚举类型： 一组有名字的常量集合
// 反向映射
// 数字枚举
enum Role {
  Reporter = 1, // 0
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
// 不能进行反向映射
enum Message {
  Success = '成功',
  Fail = '失败'
}

console.log(Message)

// 枚举成员
enum Char {
  // const 常量枚举，编译时计算出结果
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 需要被计算的枚举成员
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举 运行时代码会被移除
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型

enum E {a, b}
enum F { a = 0, b = 1}
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3

// e === f 不同枚举类型不可比较

let e1: E.a = 1
let e2: E.b

// e1 === e2

let e3: E.a = 1
e1 === e3 // 相同类型可以比较

let g1: G = G.b
let g2: G.a = G.a



function initByRole(role: number) {
  const enum Role {
    Reporter = 1, // 0
    Developer,
    Maintainer,
    Owner,
    Guest
  }
  switch(role) {
    case Role.Reporter:
    case Role.Developer:
      // do some report or develop
      break
    case Role.Maintainer:
    case Role.Owner:
      // do maintain or own
      break
    case Role.Guest:
      // do guest
      break
    default:
      // do something else
  }
}

