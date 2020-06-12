function Car(model) {
    this.model = model;
    this.color = 'yellow';
    this.year = '2012';
    this.getInfo = function () {
        return this.model + ' ' + this.year;
    };
}
var myCar = new Car('ford');
myCar.year = '2022';
console.log(myCar.getInfo());
var mySum = function (x, y) {
    return x + y;
};
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // do something
});
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('app'), 'mouse');
handleEvent(document.getElementById('world'), 'dblclick');
var tom;
tom = ['Tom', 25];
tom.push('male');
tom.push(true);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
