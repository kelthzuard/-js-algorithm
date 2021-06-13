// 地址：https://leetcode-cn.com/problems/flatten-nested-list-iterator/submissions/
// 思路：每次调用next循环检查第一个，如果是数组则展开一次。
var NestedIterator = function(nestedList) {
    this.list = nestedList
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while(this.list.length > 0) {
        if (this.list[0].isInteger()) {
            return true
        }
        else {
            let arr = this.list.shift().getList()
            this.list.unshift.apply(this.list,arr)
        }
    }
    return false
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list.shift().getInteger()
};