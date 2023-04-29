{
  // greet(name: string):string
  // greet: (name: string) => string
}

type Person = {
  greet: (name: string) => void
  // greet(name: string):void
}

let person: Person = {
  greet (name) {
    console.log(name)
  }
}
