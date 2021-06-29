// 地址：https://www.nowcoder.com/practice/8ae05c2913fe438b8b14f3968f64fc0b?tpId=188&&tqId=38616&rp=1&ru=/ta/job-code-high-week&qru=/ta/job-code-high-week/question-ranking
// 思路：和股票那个很像
function solve( A ) {
    let first = -Infinity
    let firstMin = Infinity
    let second = -Infinity
    let secondMin = Infinity
    let third = -Infinity
    for (let i = 0; i < A.length; i ++) {
        let v = A[i]
        if (i > 1) {
            third = Math.max(v*second, third, v*secondMin)
        }
        if (i > 0) {
            second = Math.max(v*first, second, v*firstMin)
            secondMin = Math.min(v*first, secondMin, v*firstMin)
        }
        first = Math.max(first, v)
        firstMin = Math.min(firstMin, v)
    }
    return third
}