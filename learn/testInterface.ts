interface Alarm {
  alert(): void
}

interface Lock {
  lock(): void
}

class Door {
  
}

class SecurityDoor extends Door implements Alarm, Lock {
  alert() {
    console.log('SecurityDoor alert');
  }
  lock() {
    return false
  }
}

class Car implements Alarm, Lock {
  alert() {
    console.log('Car alert')
  }
  lock() {
    return false
  }
}