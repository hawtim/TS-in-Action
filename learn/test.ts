function Car(model) {
    this.model = model
    this.color = 'yellow'
    this.year = '2012'
    this.getInfo = function() {
        return this.model + ' ' + this.year
    }
}

var  myCar = new Car('ford')
myCar.year = '2022'
console.log(myCar.getInfo())


let mySum: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};

let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')

document.addEventListener('click', function(e: MouseEvent) {
  // do something
})

type Name = string
type ResolveName = () => string
type ResolveOrName = Name | ResolveName

function getName(n: ResolveOrName): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

type EventNames = 'click | touch | scroll | mouseover'

function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('app'), 'mouse')
handleEvent(document.getElementById('world'), 'dblclick')


let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true)

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];