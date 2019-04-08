# 前端开发规范
## 一、命名规则

### 1、文件命名

文件夹/文件的命名统一用小写

保证项目有良好的可移植性，可跨平台 

### 2、文件引用路径

因为文件命名统一小写，引用也需要注意大小写问题

### 3、js变量

##### 3.1 变量

命名方式：小驼峰

命名规范：前缀名词

命名建议：语义化
案例

```javascript
// 友好
let maxCount = 10; 
let tableTitle = 'LoginTable';

// 不友好
let setCount = 10;
let getTitle = 'LoginTable';
```
##### 3.2 常量

命名方式：全部大写

命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

命名建议：语义化

案例
```javascript
const MAX_COUNT = 10;
const URL = 'http://www.foreverz.com';
```
##### 3.3 函数

命名方式：小驼峰式命名法。

命名规范：前缀应当为动词。

命名建议：语义化

案例
```javascript
// 是否可阅读
function canRead(): boolean {

  return true;

}
// 获取名称
function getName(): string {

  return this.name;

}
```
##### 3.4 类、构造函数

命名方式：大驼峰式命名法，首字母大写

命名规范：前缀为名称。

命名建议：语义化

案例
```javascript
class Person {

  public name: string;

  constructor(name) {

    this.name = name;

  }

}
const person = new Person('mevyn');
```
公共属性和方法：跟变量和函数的命名一样。

私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。

案例
```javascript
class Person {

  private _name: string;

  constructor() { }

  // 公共方法

  getName() {

    return this._name;

  }

  // 公共方法

  setName(name) {

    this._name = name;

  }

}

const person = new Person();

person.setName('mervyn');

person.getName(); // ->mervyn
const person = new Person('mevyn');
```
##### 3.5 css（class、id）命名规则BEM

我们还是使用大团队比较常用的BEM模式

（1）class命名使用BEM其实是块（block）、元素（element）、修饰符（modifier）的缩写，利用不同的区块，功能以及样式来给元素命名。这三个部分使用__与--连接（这里用两个而不是一个是为了留下用于块儿的命名）。

命名约定的模式如下：
```css
.block{}
.block__element{}
.block--modifier{}

block 代表了更高级别的抽象或组件
block__element 代表 block 的后代，用于形成一个完整的 block 的整体
block--modifier代表 block 的不同状态或不同版本
```
******
## 二、代码书写规则
###### 我们通过引入 [eslint](https://cn.eslint.org) 来强制开发人员来遵守这些规范
以下是eslint的配置，可通过实际场景进行调整
- [no-cond-assign](https://cn.eslint.org/docs/rules/no-cond-assign) 禁止条件表达式中出现赋值操作符
- [no-constant-condition](https://cn.eslint.org/docs/rules/no-constant-condition) 禁止在条件中使用常量表达式
- [no-control-regex](https://cn.eslint.org/docs/rules/no-control-regex) 禁止在正则表达式中使用控制字符
- [no-dupe-args](https://cn.eslint.org/docs/rules/no-dupe-args) 禁止 function 定义中出现重名参数
- [no-dupe-keys](https://cn.eslint.org/docs/rules/no-dupe-keys) 禁止对象字面量中出现重复的 key
- [no-duplicate-case](https://cn.eslint.org/docs/rules/no-duplicate-case) 禁止出现重复的 case 标签
- [no-empty](https://cn.eslint.org/docs/rules/no-empty) 禁止出现空语句块
- [no-empty-character-class](https://cn.eslint.org/docs/rules/no-empty-character-class) 禁止在正则表达式中使用空字符集
- [no-extra-boolean-cast](https://cn.eslint.org/docs/rules/no-extra-boolean-cast) 禁止不必要的布尔转换
- [no-extra-semi](https://cn.eslint.org/docs/rules/no-extra-semi) 禁止不必要的分号
- [no-func-assign](https://cn.eslint.org/docs/rules/no-func-assign) 禁止对 function 声明重新赋值

- [no-inner-declarations](https://cn.eslint.org/docs/rules/no-inner-declarations) 禁止在嵌套的块中出现变量声明或 function 声明

- [no-invalid-regexp](https://cn.eslint.org/docs/rules/no-invalid-regexp) 禁止 RegExp 构造函数中存在无效的正则表达式字符串

- [no-obj-calls](https://cn.eslint.org/docs/rules/no-obj-calls) 禁止把全局对象作为函数调用

- [no-regex-spaces](https://cn.eslint.org/docs/rules/no-regex-spaces) 禁止正则表达式字面量中出现多个空格

- [no-sparse-arrays](https://cn.eslint.org/docs/rules/no-sparse-arrays) 禁用稀疏数组

- [no-unexpected-multiline](https://cn.eslint.org/docs/rules/no-unexpected-multiline) 禁止出现令人困惑的多行表达式

- [no-unreachable](https://cn.eslint.org/docs/rules/no-unreachable) 禁止在return、throw、continue 和 break 语句之后出现不可达代码

- [no-unsafe-finally](https://cn.eslint.org/docs/rules/no-unsafe-finally) 禁止在 finally 语句块中出现控制流语句

- [no-unsafe-negation](https://cn.eslint.org/docs/rules/no-unsafe-negation) 禁止对关系运算符的左操作数使用否定操作符


- [valid-typeof](https://cn.eslint.org/docs/rules/valid-typeof) 强制 typeof 表达式与有效的字符串进行比较

- [no-case-declarations](https://cn.eslint.org/docs/rules/no-case-declarations) 不允许在 case 子句中使用词法声明

- [no-empty-pattern](https://cn.eslint.org/docs/rules/no-empty-pattern) 禁止使用空解构模式

- [no-fallthrough](https://cn.eslint.org/docs/rules/no-fallthrough) 禁止 case 语句落空

- [no-global-assign](https://cn.eslint.org/docs/rules/no-global-assign) 禁止对原生对象或只读的全局对象进行赋值

- [no-octal](https://cn.eslint.org/docs/rules/no-octal) 禁用八进制字面量

- [no-redeclare](https://cn.eslint.org/docs/rules/no-redeclare) 禁止多次声明同一变量

- [no-self-assign](https://cn.eslint.org/docs/rules/no-self-assign) 禁止自我赋值



- [no-useless-escape](https://cn.eslint.org/docs/rules/no-useless-escape) 禁用不必要的转义字符


- [no-undef](https://cn.eslint.org/docs/rules/no-undef) 禁用未声明的变量，除非它们在 /*global */ 注释中被提到


- [no-unused-vars](https://cn.eslint.org/docs/rules/no-unused-vars) 禁止出现未使用过的变量


- [no-mixed-spaces-and-tabs](https://cn.eslint.org/docs/rules/no-mixed-spaces-and-tabs) 禁止空格和 tab 的混合缩进
- [constructor-super](https://cn.eslint.org/docs/rules/constructor-super) 要求在构造函数中有 super() 的调用



- [no-const-assign](https://cn.eslint.org/docs/rules/no-const-assign) 禁止修改 const 声明的变量

- [no-dupe-class-members](https://cn.eslint.org/docs/rules/no-dupe-class-members) 禁止类成员中出现重复的名称




- [no-this-before-super](https://cn.eslint.org/docs/rules/no-this-before-super) 禁止在构造函数中，在调用 super() 之前使用 this 或 super

- [require-yield](https://cn.eslint.org/docs/rules/require-yield) 要求 generator 函数内有 yield