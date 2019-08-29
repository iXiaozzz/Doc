/**
 * 将一串数字表示成千位分隔形式——JS正则表达式的应用
 * 只支持整数的字符串
 */
function divisionThousands(str) {
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
function quickSort(arr) {
    let len = arr.length
    if (!Array.isArrayarr && !len) throw new Error('参数错误')
    let midIndex = Math.floor(len / 2)
    let midValue = arr.splice(midIndex, 1)
    let [left, right] = [[], []]
    arr.forEach(value => {
        value < midValue ? left.push(value) : right.push(value)
    })
    return quickSort(left).concat([midValue], quickSort(right))
}