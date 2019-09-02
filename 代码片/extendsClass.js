/**
 * 每个对象都有一个__proto__属性，并且指向它的prototype原型对象
 *  每个构造函数都有一个prototype原型对象
 * prototype原型对象里的constructor指向构造函数本身
 */
function Person () {
  this.name = 'iXiao'
  this.eat = function () {
    console.log('eat apple')
  }
}
Person.prototype.doWhat = function () {
  console.log('this is do method')
}
/**
 * 对象冒充 实现继承
 * 1.继承方法不能继承原型链上的方法
 */
function Web () {
  Person.call(this)
}

let w = new Web();
w.eat();
console.log('=================')
/**
 * 原型链 实现继承
 */
function App () { }
App.prototype = new Person()
let app = new App()
console.log(app)
app.doWhat()
console.log('=================')
/**
 * 组合继承
 */
function Weixin () {
  Person.call(this)
}

Weixin.prototype = new Person()
Weixin.prototype.constructor = Weixin
let wei = new Weixin()
wei.doWhat()
console.log('weixin:', wei)