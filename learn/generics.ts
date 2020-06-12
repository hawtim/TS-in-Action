// 泛型是不预先确定的数据类型，具体的类型在使用的时候才能确定

function log<T>(value: T): T {
    console.log(value)
    return value
}

log<string[]>(['a', 'v', 'b', 'c'])

log(['a', 'v', 'b', 'c'])

// 泛型函数类型
// type Log = <T>(value: T) => T

// let myLog : Log = log

interface Log<T = string> {
    (value: T) : T
}
let myLog: Log = log

myLog('1')

