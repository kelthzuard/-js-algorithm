//小顶堆
function Heap() {
    this.heap = []
}

Heap.prototype.swap = function(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
}

Heap.prototype.shiftUp = function(i) {
    if (i == 0) {
        return 
    }
    const parent = Math.floor((i+1)/2) - 1 //算父节点需要+1，和算lastroot那里不一样，lastroot的n就是（i+1）了
    if (this.heap[i] < this.heap[parent]) {
        this.swap(i, parent)
        this.shiftUp(parent)
    }
}

Heap.prototype.insert = function(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length-1)
}

Heap.prototype.shiftDown = function(i) {
    const n = this.heap.length
    const l = i*2 + 1
    const r = i*2 + 2
    var small = i
    if (l < n && this.heap[l] < this.heap[small]) {
        small = l
    }
    if (r < n && this.heap[r] < this.heap[small]) {
        small = r
    }
    if (small != i) {
        this.swap(i, small)
        this.shiftDown(small)
    }
}

Heap.prototype.pop = function() {
    const top = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.shiftDown(0)
    return top
}

Heap.prototype.peek = function() {
    return this.heap[0]
}

module.exports = Heap