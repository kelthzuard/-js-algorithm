// 地址：https://leetcode-cn.com/problems/subsets/
// 思路：每种元素只考虑加入或者不加入，直到遍历完
var subsets = function(nums) {
    var output = []
    function find(start, arr) {
        if (start == nums.length) {
            output.push(arr.slice())
            return
        }
        arr.push(nums[start])
        find(start+1, arr)
        arr.pop()
        find(start+1, arr)
    }
    find(0, [])
    return output
};
// 也可以这样写，注意这个情况没有边界条件。这两种写法是等价的。
var subsets = function(nums) {
    var output = []
    function find(start, arr) {
        output.push(arr.slice())
        for (let i = start; i < nums.length; i ++) {
            arr.push(nums[i])
            find(i+1, arr)
            arr.pop()
        }
    }
    find(0, [])
    return output
};