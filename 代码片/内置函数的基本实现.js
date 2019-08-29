// 重写call方法
Function.prototype.myCall = function (context) {
  context = context || window
  context.fn = this
  let args = [...arguments].splice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}
// 重写apply方法
Function.prototype.myApply = function (context) {
  context = context || window
  context.fn = this
  let result = null
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
// 重写bind方法
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let args = [...arguments].splice(1)
  return function F () {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

// JS的数据类型   基本类型和对象   null undefined Number String Boolean symbol