// 地址：https://leetcode-cn.com/problems/super-egg-drop/submissions/
// 思路：对于1-n中任何一层，dp(k, x) = math.Max(dp(k-1, x-1), dp(k, n-x)),前一个代表摔坏了，后一个没有。去其中的最小值即可
//进行优化，dp(k-1, x-1)是单增的，dp(k, n-x)是单减的。他们相交的地方和最小，所以通过二分法找他们的交点就可以，交点不一定是整数，所以取交点两边的
var superEggDrop = function(k, n) {
    var hash = new Map()
    function find(left, right, K, N) {
        // console.log(left ,right, K, N)
        if (right - left <= 1) {
            const l = Math.max(dp(K-1, left-1), dp(K, N-left))
            const r = Math.max(dp(K-1, right-1), dp(K, N-right))
            return Math.min(l, r)
        }
        const mid = Math.floor((left+right)/2)
        const up = dp(K-1, mid-1)
        const down = dp(K, N-mid)
        //console.log(up, down, mid)
        if (down < up) {
            //console.log('left',left, mid)
            return find(left, mid, K, N)
        }
        else if (down > up){
            //console.log('right')
            return find(mid,right, K, N)
        }
        else {
            return find(mid, mid, K, N)
        }
    }
    function dp(K, N) {
        const key = K+'+'+N
        if (hash.has(key)) {
            return hash.get(key)
        }
        if (K == 1) {
            return N
        }
        if (N == 0) {
            return 0
        }
        const r = find(1, N, K, N) + 1
        hash.set(key, r)
        return r
    }
    var d = dp(k, n)
    return d
};