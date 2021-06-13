//地址https://leetcode-cn.com/problems/ugly-number-ii/
//小顶堆，每次出堆头，加入*2，*3，*5，再重排序堆。重复直到出的是n
var nthUglyNumber = function(n) {
    var hash = new Set()
    var heap = [1]
    var count = 0
    function heapify(N, i) {
        let smallest = i
        let left = i*2 + 1
        let right = i*2 + 2
        if (left < N && heap[left] < heap[smallest]) {
            smallest = left
        }
        if (right < N && heap[right] < heap[smallest]) {
            smallest = right
        }
        if (smallest != i) {
            [heap[smallest], heap[i]] = [heap[i], heap[smallest]]
            heapify(N, smallest)
        }
    }
    while(true) {
        let top = heap[0]
        for (let val of [top*2, top*3, top*5]) {
            if (!hash.has(val)) {
                hash.add(val)
                heap.push(val)
            }
        }
        
        let len = heap.length - 1
        let temp = heap[len]
        heap[len] = heap[0]
        heap[0] = temp
        let cur = heap.pop()
        count ++
        if (count == n) {
            return cur
        }
        let lastRoot = Math.floor(len/2) - 1
        for (let i = lastRoot; i >= 0; i --) {
            heapify(len, i)
        }
    }
};

//console.log(nthUglyNumber(10))

var Heap = require('./heap.js')

var useHeapUgly = function(n) {
    var hash = new Set()
    hash.add(1)
    var minHeap = new Heap()
    minHeap.insert(1)
    var count = 0
    while(true) {
        const top = minHeap.pop()
        for (let val of [2,3,5]) {
            if (!hash.has(top*val)) {
                minHeap.insert(top*val)
                hash.add(top*val)
            }
        }
        count ++
        if (count == n) {
            return top
        }
    }
}

console.log(useHeapUgly(10))