abstract class Animal {
    abstract name:string
    abstract makeSound(): void;
}

class Human extends Animal{
    name:'libai'
    makeSound(){
        console.log('hh')
    }
}
