//地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
//思路：大顶堆，并维持一个hash记录当前窗口的值，如果堆顶不在当前窗口，删除，直到堆顶在当前窗口。每次窗口切换进行插入堆和删除hash
function Heap() {
    this.heap = []
}

Heap.prototype.insert = function(val) {
    this.heap.push(val)
    this.up(this.heap.length-1)
}

Heap.prototype.up = function(i) {
    if (i < 0) return
    var parent = Math.floor((i+1)/2) - 1
    if (this.heap[i] > this.heap[parent]) {
        const temp = this.heap[i]
        this.heap[i] = this.heap[parent]
        this.heap[parent] = temp
        this.up(parent)
    }
}

Heap.prototype.down = function(i) {
    var l = i*2 + 1
    var r = i*2 + 2
    var largest = i
    const n = this.heap.length
    if (l < n && this.heap[l] > this.heap[largest]) {
        largest = l
    }
    if (r < n && this.heap[r] > this.heap[largest]) {
        largest = r
    }
    if (largest != i) {
        const temp = this.heap[largest]
        this.heap[largest] = this.heap[i]
        this.heap[i] = temp
        this.down(largest)
    }
}

Heap.prototype.deltop = function() {
    const temp = this.heap[0]
    this.heap[0] = this.heap[this.heap.length-1]
    this.heap.length = this.heap.length - 1
    this.down(0)
    return temp
}

Heap.prototype.peek = function() {
    return this.heap[0]
}

var maxSlidingWindow = function(nums, k) {
    var hash = {}
    var h = new Heap()
    var output = []
    for (let i = 0; i < nums.length; i ++) {
        const cur = nums[i]
        h.insert(cur)
        if (hash[cur]) {
            hash[cur] ++
        }
        else {
            hash[cur] = 1
        }
        while(!hash[h.peek()]) {
            h.deltop()
        }
        if (i >= k - 1) {
            output.push(h.peek())
            const d = nums[i-k+1]
            if (hash[d] > 1) {
                hash[d] --
            }
            else {
                delete hash[d]
            }
        }
    }
    return output
};