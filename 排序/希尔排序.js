// 希尔排序，先设立一个较大的gap，对每个gap内的进行插入排序。再逐渐缩小gap
function shellSort(arr) {
    const n = arr.length
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        for (let i = gap; i < n; i ++) { //进行插入排序
            let j = i - gap
            const temp = arr[i]
            while(j >= 0 && temp < arr[j]) {
                arr[j + gap] = arr[j]
                j -= gap
            }
            arr[j + gap] = temp
        }
    }
    return arr
}

var arr = [2,1,-1,5,3,6]
console.log(shellSort(arr))