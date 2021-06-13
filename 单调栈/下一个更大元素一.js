// 地址：https://leetcode-cn.com/problems/next-greater-element-i/
// 解析可看下一个更大元素二
// 第二个数组维护单调栈，第一个数组维护hashmap
var nextGreaterElement = function(nums1, nums2) {
    var hashmap = new Map();
    nums1.forEach((v, i) => {
        hashmap.set(v, i);
    });
    var output = new Array(nums1.length);
    output.fill(-1);
    var stack = [];
    for (v of nums2) {
        while(stack.length > 0 && stack[stack.length-1] < v) {
            let n = stack.pop();
            if (hashmap.has(n)) { //这里注意用对象可能存在对象值为0，此处判定false的情况。
                output[hashmap.get(n)] = v;
            }
        }
        stack.push(v);
    }
    return output;
};