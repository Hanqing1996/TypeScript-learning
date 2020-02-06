
class Person {
    children:Array<Person>=[]
    constructor(public name: string) {
        this.name = name
    }
    sayHI():void {
        console.log(`hi I am ${this.name}`)
    }
    appenChild(newChild:Person):void{
        this.children.push(newChild)
    }
}

let child1 = new Person('王老实')
let child2 = new Person('王不老实')
let grandPa = new Person('王大爷')
grandPa.appenChild(child1)
grandPa.appenChild(child2)
