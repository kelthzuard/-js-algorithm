//地址：https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/
//思路：一个大顶堆维护小的那一半，一个小顶堆维护大的那一半。每次插入如果两个堆长度相差2就平衡。每次取中位数就取平均或者长的那个堆顶
var Heap = function(type) {
    this.type = type
    this.heap = []
}
Heap.prototype.swap = function(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
}

Heap.prototype.up = function(i) {
    const parent = Math.floor((i+1)/2) - 1
    if (parent < 0) return
    let r = false
    if (this.type == 'big' && this.heap[i] > this.heap[parent]) {r = true}
    if (this.type == 'small' && this.heap[i] < this.heap[parent]) {r = true}
    if (r) {
        this.swap(i, parent)
        this.up(parent)
    }
} 

Heap.prototype.down = function(i) {
    const n = this.heap.length
    const l = i*2 + 1
    const r = i*2 + 2
    var shouldBe = i
    if (l < n && this.type == 'big' && this.heap[l] > this.heap[shouldBe]) {shouldBe = l}
    if (r < n && this.type == 'big' && this.heap[r] > this.heap[shouldBe]) {shouldBe = r}
    if (l < n && this.type == 'small' && this.heap[l] < this.heap[shouldBe]) {shouldBe = l}
    if (r < n && this.type == 'small' && this.heap[r] < this.heap[shouldBe]) {shouldBe = r}
    if (shouldBe != i) {
        this.swap(i, shouldBe)
        this.down(shouldBe)
    }
}

Heap.prototype.insert = function(val) {
    this.heap.push(val)
    this.up(this.heap.length-1)
}

Heap.prototype.removeHead = function() {
    const head = this.heap[0]
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.pop()
    this.down(0)
    return head
}

Heap.prototype.peek = function() {
    return this.heap.length > 0?this.heap[0]:Infinity
}

Heap.prototype.getLen = function() {
    return this.heap.length
}

var MedianFinder = function() {
    this.small = new Heap('small')
    this.big = new Heap('big')
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const s = this.small.peek()
    const b = this.big.peek()
    if (num <= b) {this.big.insert(num)}
    else {this.small.insert(num)}
    // console.log("************")
    // console.log(this.small.heap,this.big.heap)
    const slen = this.small.getLen()
    const blen = this.big.getLen()
    if (slen - blen == 2) {
        let shead = this.small.removeHead()
        this.big.insert(shead)
    }
    else if (blen - slen == 2) {
        let bhead = this.big.removeHead()
        this.small.insert(bhead)
    }
    // console.log(this.small.heap,this.big.heap)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const s = this.small.getLen()
    const b = this.big.getLen()
    if ((s+b)%2 == 0) {
        return (this.small.peek() + this.big.peek())/2
    }
    else {
        if (s > b) {
            return this.small.peek()
        }
        else {
            return this.big.peek()
        }
    }
};