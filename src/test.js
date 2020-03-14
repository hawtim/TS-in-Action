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