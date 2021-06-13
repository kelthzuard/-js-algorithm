// 地址：https://leetcode-cn.com/problems/longest-consecutive-sequence/
// 思路：并查集
var longestConsecutive = function(nums) {
    function Node(val) {
        this.val = val
        this.father = this
        this.count = 0
    }
    function find(x, add) {
        if (add) {
            x.count += 1
            gmax = Math.max(x.count, gmax)
        }
        if (x.val == x.father.val) return x
        else {
            x.father = find(x.father, add)
            return x.father
        }
    }
    function merge(x, y) {
        y.father = x
        x.count += y.count
        gmax = Math.max(x.count, gmax)
    }
    var disjoint = new Map()
    var gmax = 0
    for (let i = 0; i < nums.length; i ++) {
        const v = nums[i]
        if (disjoint.has(v)) {
            continue
        }   
        var x = new Node(v)
        let up = disjoint.get(v+1)
        let down = disjoint.get(v-1)
        if (up && !down) {
            x.father = up
            find(x, true)
        }
        else if (!up && down) {
            x.father = down
            find(x, true)
        }
        else if(up && down){
            x.father = up
            let upfather = find(x, true)
            let downfather = find(down, false)
            merge(upfather, downfather)
        }
        else {
            find(x, true)
        }
        disjoint.set(v, x)
    }
    return gmax
};