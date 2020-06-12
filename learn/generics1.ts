interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}

log([1, 2])
log('333')
log({length: 1})