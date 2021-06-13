//地址：https://leetcode-cn.com/problems/rotate-array/submissions/
//方法1：从0开始，把当前数放到(i+k)%n，也就是应该放的位置上，循环这个过程直到 next == i，每次count+1，count到所有数的时候结束。
var rotate = function(nums, k) {
    const n = nums.length
    let count = 0
    for (let i = 0; count < nums.length; i ++) {
        let prev = nums[i]
        let prevIndex = null
        while(prevIndex !== i) {
            let next = prevIndex == null?(i+k)%n:(prevIndex+k)%n
            let temp = nums[next]
            nums[next] = prev
            prevIndex = next
            prev = temp
            count ++
        }
    }
};

// 方法二
// nums = "----->-->"; k =3
// result = "-->----->";

// reverse "----->-->" we can get "<--<-----"
// reverse "<--" we can get "--><-----"
// reverse "<-----" we can get "-->----->"
var rotate = function(nums, k) {
    function reverse(s, e) {
        while(s <= e) {
            let temp = nums[s]
            nums[s] = nums[e]
            nums[e] = temp
            s ++
            e --
        }
    }
    k = k%nums.length
    const n = nums.length
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n-1)
};