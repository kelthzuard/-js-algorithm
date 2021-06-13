//地址：https://www.nowcoder.com/practice/e016ad9b7f0b45048c58a9f27ba618bf?tpId=117&tqId=37791&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：建立K小顶堆，如果后面的大于最小值，替换为最小值，重构堆。最后返回arr[0]
function findKth( a ,  n ,  K ) {
    function heapify(arr, N, i) {
        var l = i*2 + 1
        var r = i*2 + 2
        var small = i
        if (l < N && arr[l] < arr[small]) {
            small = l
        }
        if (r < N && arr[r] < arr[small]) {
            small = r
        }
        if (small != i) {
            [arr[i], arr[small]] = [arr[small], arr[i]]
            heapify(arr, N, small)
        }
    }
    const lastRoot = Math.floor(K/2) - 1
    for (let i = lastRoot; i >= 0; i --) {
        heapify(a, K, i)
    }
    for (let i = K; i < n; i ++) {
        if (a[i] > a[0]) {
            a[0] = a[i]
            heapify(a, K, 0)
        }
    }
    return a[0]
}
module.exports = {
    findKth : findKth
};
