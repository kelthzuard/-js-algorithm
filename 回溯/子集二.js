// 地址:https://leetcode-cn.com/problems/subsets-ii/submissions/
// 思路：首先用回溯，设置边界条件为遍历完，每个元素仅有选和不选两个分至
// 处理重复的思路和以前一样，如果两个相同元素，前一个元素没有被使用，说明两个元素在两个不同的分至，抛弃。如果前一个用过，说明在同一个分支，采用。
var subsetsWithDup = function(nums) {
    var output = []
    nums.sort((a,b) => a-b)
    function find(lastUse, cur, arr) {
        if (cur == nums.length) {
            output.push(arr.slice())
            return
        }
        find(false, cur+1, arr)
        if (cur > 0 && !lastUse && nums[cur] == nums[cur-1]) {
            return
        }
        arr.push(nums[cur])
        find(true, cur+1, arr)
        arr.pop()
    }
    find(false, 0, [])
    return output
};