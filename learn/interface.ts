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
  [x: string]: any,
  y: number
}



