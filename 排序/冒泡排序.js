function bubble(arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i ++) {
        for (let j = 0; j < n - 1 - i; j ++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

var arr = [2,1,-1,5,3,6]
console.log(bubble(arr))