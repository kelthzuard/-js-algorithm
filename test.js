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
    
    startEnd.sort((a, b) => (a[0] === b[0])?a[1] - b[1]:a[0] - b[0])
    console.log(startEnd)
    const heap = new Heap()
    for (let val of startEnd) {
        if(heap.getLen() && val[0] >= heap.peek()) {
            heap.removeHead()
        }
        heap.insert(val[1])
    }
    //console.log(heap.heap)
    return heap.getLen()
}


let arr = [[348,813],[340,385],[465,676],[64,400],[744,959],[130,974],[769,963],[269,901],[406,880],[30,980],[439,854],[451,658],[341,650],[40,796],[332,982],[14,647],[777,787],[614,823],[74,545],[114,199],[406,665],[546,943],[577,806],[640,986],[499,866],[392,554],[388,693],[191,622],[586,997],[114,808],[41,775],[52,884],[184,718],[118,938],[224,498],[78,746],[87,672],[117,216],[66,313],[605,874],[41,876],[269,771],[180,368],[462,677],[185,736],[136,188],[178,821],[195,931]]
console.log(minmumNumberOfHost(0, arr))