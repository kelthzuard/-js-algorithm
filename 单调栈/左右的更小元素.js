// 地址：https://www.nowcoder.com/practice/ae25fb47d34144a08a0f8ff67e8e7fb5?tpId=188&&tqId=38558&rp=1&ru=/ta/job-code-high-week&qru=/ta/job-code-high-week/question-ranking
// 从左到右，从右到左，两次单调增栈
function foundMonotoneStack( nums ) {
    const n = nums.length
    var stack = []
    var r = new Array(n).fill(0).map(() => {
        return new Array(2).fill(-1)
    })
    for (let i = 0 ; i < n; i ++) {
        while(stack.length && nums[i] < stack[stack.length-1][0]) {
            const p = stack.pop()
            r[p[1]][1] = i
        }
        stack.push([nums[i], i])
    }
    stack = []
    for (let i = n - 1; i >= 0; i --) {
        while(stack.length && nums[i] < stack[stack.length-1][0]) {
            const p = stack.pop()
            r[p[1]][0] = i
        }
        stack.push([nums[i], i])
    }
    return r
}