#### 如何在 vscode 中运行

#### ts-node
> 让 ts 运行在 node.js 上

#### tutorials
向导,同 guide

#### tsc  
把 ts 编译成 js

#### 编译时vs运行时
* JS:运行时报错（由于运行是在浏览器中，所以用户将看到报错）
```
// 人为设置
function fn(user){
    if(type of user!='person'){
        throw new Error('user 类型错误')
    }
}
```
* TS:编译时报错（代码未打包上传到服务器）
> 所以 TS 的优势是提供了更好的报错方式

#### 指定函数返回类型
```
function add(x: number, y: number): number {
    return x + y;
}
```
#### 函数重载
```
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a,b):any{
    if(typeof a=='number' && typeof b=='number'){
        return a+b
    }
    else if(typeof a=='string' && typeof b=='string'){
        return a+b
    }
}


console.log(add(1,2))
console.log(add('hello','world'));
```

#### 数组
```
let strs:Array<number>=[1,2,3]
```

#### 元组
```
function add(a:string,b:number): [string, number]{
    return [a,b]
}

console.log(add('hello',123))
```

#### #!/usr/bin/env ts-node
> 1.ts 内容如下
```
#!/usr/bin/env ts-node
console.log('hello world')
```
则命令行中输入
```
1.ts// hello world 
```
所以 #!/usr/bin/env ts-node 的作用就是引入环境变量，省略掉"node"

#### 查看 process 的定义
> vscode 下按住 ctrl 再点击 process 会跳转到

#### 在 ts 中使用 ES6 语法
修改 tsconfig.json 内的 compilerOptions.lib

#### 不能在顶级作用域运行 return
```
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log('输入不合法');
  return; // 有问题
}

console.log(a + b);
```

#### enum
```
enum Gender{
    'Man',
    'Woman'
}

let gender:Gender=Gender.Man
console.log(gender) // 0
```
```
enum Gender{
    Man='black',
    Woman='white'
}

let gender:Gender=Gender.Man
console.log(gender) // 'black'
```

#### null 和 undefined
```
let num:Number=null
let num:Number=undefined
```

#### 断言 
> 主观保证 n 是 string 类型
```
let n:any='123'
console.log((<string>n).length) // 3
```
```
let n:any=123
console.log((<string>n).length) // 不报错，结果为 undefined
```

#### 类型转换
不能直接修改一个变量的类型
```
let n:number=123
n=n.toString() // Type 'string' is not assignable to type 'number'
```
必须重新声明一个变量
```
let n:number=123
let n2=n.toString()
```

#### obj.toString() 的结果
```
let obj:object={name:'libai',age:12}
console.log(obj.toString()) // [object Object] ,不是 {name:'libai',age:12}
```

#### 用 const 声明的变量一定不能修改吗
```
const obj:object={name:'libai'}
obj['name']='zhangfei'
console.log(obj) // {name: "zhangfei"}
```
这是因为 const 声明的变量不可修改指的是"值"不可修改。obj 保存的是一个内存地址，我们修改的是该内存地址保存的东西，没有修改内存地址的值

#### TS的数据类型
JS的7种数据类型（number,object,string,boolean,null,undefined,symbol）+ any + void + never 

#### 【面试】函数和方法的区别
> 当一个函数是一个对象的属性的时候，我们把这个函数叫做对象的方法


#### TS 中如何为一个函数添加属性
> 以下代码在 js 中运行毫无问题。但在 ts 中会报错
```
let x=()=>{
    return 'fn'
}

x.myName='libai' // Property 'myName' does not exist on type '() => string'.
```
想要实现为一个函数添加属性，我们必须将该函数设置为 any 类型
```
let x:any=()=>{
    return 'fn'
}

x.myName='libai'
```

#### interface
* 接受 interface 类型的字段
```
interface Shape {
    head: string;
    body: string;
}
interface Human {
    shape: Shape;
}

let perso: Human = {
    shape:
    {
        head: '〇',
        body: '口'
    }
}
```
* 函数属性
```
interface Human {
  say(word: string): void;
}

let frank: Human = {
  say(word: string) {
    console.log(word);
  },
};

frank.say('你好');
```
* 可选属性
```
interface Human {
    likedGame?: Array<string>;
}
let person:Human={} // 不必传入 likedGame
console.log(person) //{}

```
* 添加额外属性
```
interface SquareConfig {
    width?: number;
    height:number;
    [propName: string]: any; // 凡是类型为 any 的属性都可以额外添加
}


let square:SquareConfig={
    height:200,
    color:'red' // 额外添加的属性
}
```
* readonly:可读不可写
```
interface Human {
    readonly name: string;
}
let perspn={name:'libai'}
console.log(person.name) // libai
person.name='zhangfei' // Cannot assign to 'name' because it is a read-only property.
```
* 用 interface 描述函数
```
interface Calculate{
    (a:number,b:number):number
}

let add:Calculate=(a:number,b:number)=>{
    return a+b;
}
```
* 怎么给函数类型的 interface 添加属性
> 关键是知道 TS 中如何为一个函数添加属性（见上）
```
interface Calculate {
    (a: number, b: number): number;
    myName:string
}

let x:any=(a: number, b: number)=>{
    return a+b
}
x.myName='libai'

let add: Calculate = x

console.log(add(3,4)) 
```
* 继承
```
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square:Square ={
    color:'blue',
    sideLength:10
}
```
* 继承多个接口
```
interface  dog{
    color: string;
}

interface  pet{
    host: string;
}

interface Jiwawa extends dog,pet {
    home:string
}

let bili:Jiwawa ={
    color:'red',
    host:'Jack',
    home:'America'
}
```
* 多重继承
```
interface  dog{
    color: string;
}

interface  pet extends dog{
    host: string;
}

interface Jiwawa extends pet {
    home:string
}

let bili:Jiwawa ={
    color:'red',
    host:'Jack',
    home:'America'
}
```

#### Ts 类
* public
> 允许在 class 外部访问该属性
> 不加修饰符的属性默认为 public
```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```
等价于
```
class Student {
    fullName: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    constructor(firstName,middleInitial,lastName) {
        this.firstName=firstName
        this.middleInitial=middleInitial
        this.lastName=lastName
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```
*  static
> 为类添加属性，而不是为对象添加属性
```
class Human{
    static type='human'
    constructor(public name:string,public age:number){
        this.name=name
        this.age=age
    }
}

let person= new Human('libai',12)
console.log(person.name) // person对象的属性
console.log(person.age) // person对象的属性
console.log(Human.type) // Human类的属性
person.type // Error:Property 'type' is a static member of type 'Human'
```
* private
> 只能在 class 内部访问该属性
```
class Human{
    private humanType:string
    constructor(humanType){
        this.humanType=humanType
    }
}

let person= new Human('people')
person.humanType // Error:Property 'humanType' is private and only accessible within class 'Human'.
``` 
* protected
> 该类及其子类内部可访问该属性值
```
class Animal{
    protected race:string
    constructor(race){
        this.race=race
    }
}

class Human extends Animal{
    
    constructor(race){
        super(race)
    }
    sayRace(){
        console.log(this.race) // 访问 race
    }
}

let person=new Human('Asian')
person.sayRace()
```
#### get set 模式
> 只是一种设计模式
```
class Person {
    constructor() {
    }
    private _name: string;

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }
}

let person = new Person();

// person._name = "apple";  // 无法访问到_name变量

person.name = "apple";

console.log(person.name);  // 输出 apple
```

#### 抽象类
> 一个类如果继承了一个抽象类，那么它必须实现该抽象类内部由 abstract 修饰的属性
```
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
```

#### 泛型
* T 帮助我们捕获用户传入的类型,即 arg 的类型
* 我们把 identity 函数叫做泛型，即：泛型是一个函数
```
function identity<T>(arg){}
```
* 可以推断 s 的类型是 string
```
function returnIt<X>(sth:X):X{
    return sth;
}

let s=returnIt('hi') // 等价于 returnIt<X>('hi')。我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。
```
* 不能推断 s 的类型
```
function returnIt(sth:any):any{
    return sth;
}

let s=returnIt('hi')
```
* 泛型接口
```
// GenericIdentityFn 是一个函数接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

#### 泛型约束
> 对于 T 的有约束
```
// 要求 T 必须有 length 属性
interface hasLength {
    length:number
}

function getLength<T extends hasLength>(arg:T):number{
    return arg.length
}
```


#### 用泛型构造类的实例
```
function create<T>(c: {new(): T; }): T {
    return new c();
}

class Human{
    public type='human'
    constructor(){
    }
}

let {type}=create(Human)
console.log(type) // human
```
等价于
```
class Human{
    public type='human'
    constructor(){
    }
}

let {type}=new Human()
console.log(type) // human
```


#### TS-规定 this 的类型
* 在 js 中，this 是不能作为函数参数的
```
function fn(this){
  console.log(this)
}

fn.call('libai')

// Error: Unexpected token 'this'
```
* 在 Ts 中，this 是可以作为函数参数，并规定类型
```
function fn(this:string) {
    console.log(this)
}

fn.call('libai') // 'libai'
```


#### js-this 补充
* 以下写法会报错
```
// Error: Unexpected token 'this'
function fn(this){

}
```

#### 类型推断
* 例1
```
function add(n1:string,n2:string) {
    return n1+n2
}

let s=add('libai','zhangfei')
```
然后 ts 会推断出 s 是 string 类型
* 例2
```
function add(n1:string,n2:string) {
    if(n1>'1')
        return n1+n2
    else
        return 0     
}

let s=add('libai','zhangfei')
```
然后 ts 会推断出 s 是 string|number 类型
* 例3
```
let s=1 // TS 推断出 s 的类型是 number
s.split() // 报错:因为 TS 知道 s 的类型是 number
```

#### 类型兼容
```
interface Human{
    name:string,
    age:number
}

let person={name:'libai',age:20,gender:false}
let person2:Human=person
```

#### sound
* 完备的
* sound 是类型语言的名词