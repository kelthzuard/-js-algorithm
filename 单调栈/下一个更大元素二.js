// 地址：https://leetcode-cn.com/problems/next-greater-element-ii/submissions/
// 思路：单调栈，单调栈即栈内元素有序
// 本题思路：维护一个递减的单调栈，将递减的一组序列的下标全部堆栈，当遇到下一个大的值时，一直出栈直到小于这个值，那么前面所有的值的下一个最大就是该值。再把该值的下标入栈。
// 又因为是循环序列，所以再遍历一遍就ok。也可以用下标对数组长度取模来实现模拟第二次遍历。
// 细节：栈内保存的是下标，输出需要先初始化为-1，因为没修改的不会被涉及到。
var nextGreaterElements = function(nums) {
    var output = new Array(nums.length);
    var stack = [];
    var len = nums.length;
    output.fill(-1);
    for (let i = 0; i < len*2; i ++) {
        while(stack.length > 0 && nums[stack[stack.length-1]] < nums[i%len]) {
            let n = stack.pop();
            output[n] = nums[i%len];
        }
        stack.push(i%len);
    }
    return output;
};