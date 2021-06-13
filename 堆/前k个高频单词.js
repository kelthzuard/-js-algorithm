// 地址：https://leetcode-cn.com/problems/top-k-frequent-words/
// 思路：最后记得把堆里面的排序，要不然里面是字典无序的

var topKFrequent = function(words, k) {
    var hash = new Map()
    for (let val of words) {
        if (hash.has(val)) {
            hash.set(val, hash.get(val)+1)
        }
        else {
            hash.set(val, 1)
        }
    }
    var heap = []
    hash = Array.from(hash)
    for (let i = 0; i < k; i ++) {
        heap.push(hash[i])
    }
    function compare(x, y) {
        if (x[1] == y[1]) {
            return x[0].localeCompare(y[0]) != -1
        }
        else {
            return x[1] < y[1]
        }
    }
    function down(i, n) {
        var largest = i
        const l = i*2 + 1
        const r = i*2 + 2
        if (l < n && compare(heap[l], heap[largest])) {
            largest = l
        }
        if (r < n && compare(heap[r], heap[largest])) {
            largest = r
        }
        if (largest !== i) {
            [heap[i], heap[largest]] = [heap[largest], heap[i]]
            down(largest, n)
        }
    }
    const lastroot = Math.floor(k/2) - 1
    for (let i = lastroot; i >= 0; i --) {
        down(i, k)
    }
    for (let i = k; i < hash.length; i ++) {
        if (compare(heap[0], hash[i])) {
            heap[0] = hash[i]
            down(0, k)
        }
    }
    return heap.sort((a, b) => {
        if (a[1] == b[1]) {
            return (b[0] > a[0])?-1:1
        }
        else {
            return b[1] - a[1]
        }
    }).map(v => v[0])
};