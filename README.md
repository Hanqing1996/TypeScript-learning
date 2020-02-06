#### ts-node
> 让 ts 运行在 node.js 上

#### tutorials
向导,同 guide

#### tsc  
把 ts 编译成 js

#### public
> 把
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