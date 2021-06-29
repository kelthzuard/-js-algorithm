// 思路：桶排序
// 首先将所有数分成 (max - min)/(n-1) 桶容量 的数组。这个由推导生成， 生成要给长度为 (max - min)/bucketSize 的桶数组
// 遍历数组，通过 (num - min)/bucketSize 找到对应的桶号，然后一个桶维护一个最大值和最小值。
// 最后遍历桶，最大间距一定在 前一个桶的最大值和后一个桶的最小值之间。
var maximumGap = function(nums) {
    const n = nums.length
    if (n < 2) return 0
    let min = Infinity
    let max = -Infinity
    nums.map(v => {
        min = Math.min(v, min)
        max = Math.max(max, v)
    })
    const bucketSize = Math.max(Math.floor((max-min)/(n-1)), 1)
    const bucketLen = Math.floor((max-min)/bucketSize) + 1
    var bucket = new Array(bucketLen).fill(0).map(() => {
        return Array.from([Infinity, -Infinity])
    })
    for (let num of nums) {
        const idx = Math.floor((num - min)/bucketSize)
        bucket[idx][0] = Math.min(num, bucket[idx][0])
        bucket[idx][1] = Math.max(num, bucket[idx][1])
    }
    let o = 0
    let prev = -1
    for (let b of bucket) {
        if (prev !== -1 && b[0] != Infinity) {
            o = Math.max(o, b[0] - prev)
        }
        if (b[1] != -Infinity) {
            prev = b[1]
        }
    }
    return o
};