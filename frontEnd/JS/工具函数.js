/**
 * 将一串数字表示成千位分隔形式——JS正则表达式的应用
 * 只支持整数的字符串
 */
function divisionThousands (str) {
  if (typeof str !== 'number') {
    str = '' + Math.floor(str)
  }
  reg = /(?=(\B\d{3})+$)/g
  return str.replace(reg, ',')
}
/**
 * 快速排序
 * 1.在数据集之中，找一个基准点
 * 2.建立两个数组，分别存储左边和右边的数组
 * 3.利用递归进行下次比较
 */
function quickSort (arr) {
  let len = arr.length
  if (!Array.isArray(arr) && !len) throw new Error('参数错误')
  let midIndex = Math.floor(len / 2)
  let midValue = arr.splice(midIndex, 1)
  let [left, right] = [[], []]
  arr.forEach(value => {
    value < midValue ? left.push(value) : right.push(value)
  })
  return quickSort(left).concat([midValue], quickSort(right))
}
/**
 * 防抖函数
 * @param func 
 * @param wait 
 * @param immediate 
 */
function debounce (func, wait = 50, immediate = true) {
  let timer, context, args
  const later = () => setTimeout(() => {
    timer = null
    if (!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait)
  return function (...params) {
    if (!timer) {
      timer = later()
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}
/**
 * 函数节流方法
 * @param Function func 延时调用函数
 * @param Number wait 延迟多长时间
 * @param Number atLeast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
function throttle (func, wait, atLeast) {
  let timer = null, previous = null
  return function () {
    let now = +new Date()
    previous = previous || now
    if (atleast && now - previous > atLeast) {
      func()
    } else {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        func()
      }, wait)
    }
  }
}
/**
 * 深度扁平化
 * @param  arr 
 */
function flattenDeep (arr) {
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], []) : [arr]
}