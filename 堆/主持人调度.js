// 地址：https://www.nowcoder.com/practice/4edf6e6d01554870a12f218c94e8a299?tpId=188&&tqId=38647&rp=1&ru=/ta/job-code-high-week&qru=/ta/job-code-high-week/question-ranking
// 思路：小顶堆里保存结束时间，如果新加入的开始时间大于结束时间，说明堆顶的那个主持人可以来弄这个。就去头加尾，最后返回堆元素的多少
function minmumNumberOfHost( n ,  startEnd ) {
    function Heap() {
        this.heap = []
    }
    Heap.prototype.up = function(i) {
        const father = Math.floor((i+1)/2) - 1
        if (father < 0) return
        if (this.heap[i] < this.heap[father]) {
            [this.heap[i], this.heap[father]] = [this.heap[father], this.heap[i]]
            this.up(father)
        }
    }
    Heap.prototype.down = function(i) {
        const l = i*2 + 1
        const r = i*2 + 2
        const n = this.heap.length
        let small = i
        if (l < n && this.heap[l] < this.heap[small]) {
            small  = l
        }
        if (r < n && this.heap[r] < this.heap[small]) {
            small  = r
        }
        if (small != i) {
            [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]]
            this.down(small)
        }
    }
    Heap.prototype.insert = function(val) {
        this.heap.push(val)
        this.up(this.heap.length-1)
    }
    Heap.prototype.removeHead = function() {
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.down(0)
    }
    Heap.prototype.peek = function() {
        return this.heap[0]
    }
    Heap.prototype.getLen = function() {
        return this.heap.length
    }
    
    startEnd.sort((a, b) => (a[0] === b[0])?b[1] - a[1]:a[0] - b[0])
    const heap = new Heap()
    for (let val of startEnd) {
        if(heap.getLen() && val[0] >= heap.peek()) {
            heap.removeHead()
        }
        heap.insert(val[1])
    }
    return heap.getLen()
}