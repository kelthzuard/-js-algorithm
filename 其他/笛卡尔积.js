function dikaer(arr) {
    const n = arr.length
    if (n <= 1) return arr
    const m = Math.floor((n - 1)/2)
    let l = arr.slice(0, m+1)
    let r = arr.slice(m+1, n)
    l = dikaer(l)[0]
    r = dikaer(r)[0]
    return merge(l ,r)
}

function merge(l ,r) {
    const o = []
    for (let i of l) {
        for (let k of r) {
            o.push([].concat(i, k))
        }
    }
    return [o]
}

var arr = [[1,2], [3,4], [5,6], [7,8]]
console.log(dikaer(arr))