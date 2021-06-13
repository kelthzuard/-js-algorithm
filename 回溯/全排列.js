//地址：https://www.nowcoder.com/practice/a43a2b986ef34843ac4fdd9159b69863?tpId=117&tqId=37739&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：一个visited保存遍历过的。先排序，为了不重复，相邻两个的顺序只取一边，即要不从左到右，要不从右到左
function permuteUnique( num ) {
    num.sort((a, b) => {
        return a - b
    })
    const l = num.length
    var visited = new Array(l).fill(false)
    var output = []
    function trace(arr) {
        if (arr.length == l) {
            output.push(arr.slice())
        }
        for (let i = 0; i < l; i ++) {
            if (visited[i]) {
                continue
            }
            if (i > 0 && num[i-1] == num[i] && visited[i-1]) { //这里规定顺序从右到左，所以从左到右，左以访问，左右重复的直接被舍弃掉。
                break
            }
            arr.push(num[i])
            visited[i] = true
            trace(arr)
            arr.pop()
            visited[i] = false
        }
    }
    trace([])
    return output
}
module.exports = {
    permuteUnique : permuteUnique
};