//地址：https://leetcode-cn.com/problems/volume-of-histogram-lcci/
//思路1：动态规划
// 单个直方柱的水量 = Math.min(左边的最大高度，右边的最大高度) - height[i]
// 从左边用动态规划计算自左边来的最大高度。右边同理
// leftMax = math.min(leftmax[i-1], height[i])

var trap = function(height) {
    const n = height.length
    var output = 0
    var leftMax = new Array(n).fill(0)
    var rightMax = new Array(n).fill(0)
    leftMax[0] = height[0]
    rightMax[n-1] = height[n-1]
    for (let i = 1; i < n; i ++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i])
    }
    for (let i = n - 2; i >= 0; i --) {
        rightMax[i] = Math.max(rightMax[i+1], height[i])
    }
    for (let i = 0; i < n; i ++) {
        output += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return output
};

//思路二：双指针，用左指针和一个左最大值追踪左边最大值，同理右边，不停往中间移动
// 这样保证每一个左右指针指向的元素，始终是左右最大值的最小值。
var trap = function(height) {
    const n = height.length
    var leftMax = 0
    var rightMax = 0
    var left = 0
    var right = n - 1
    var output = 0
    while(left < right) {
        leftMax = Math.max(height[left], leftMax)
        rightMax = Math.max(height[right], rightMax)
        if (leftMax < rightMax) {
            output += leftMax - height[left]
            left ++
        }
        else {
            output += rightMax - height[right]
            right --
        }
    }
    return output
};