// 思路：首先建立一个hash记录所有值，然后依次查找，当且仅当 nums[i]-1不存在的时候进行查找，这样避免了重复查找
var longestConsecutive = function(nums) {
    var gmax = 0
    function find(val, len) {
        if (hash.has(val)) {
            len ++
            gmax = Math.max(gmax, len)
            find(val+1, len)
        }
    }
    var hash = new Set(nums)
    console.log(hash)
    var longest = 0
    for (let val of nums) {
        if (!hash.has(val-1)) {
            find(val, 0)
        }
    }
    return gmax
};