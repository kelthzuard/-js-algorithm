function heapify(arr, n, i) { // 调整堆函数输入数组，数组长度，和需要调整的数组下标，构造大顶堆
    //找到左右节点并比较，如果左右节点比父节点大，则将父节点和大节点交换，并且递归调用大节点。确保把子树中最大的节点浮动到位置i上
    var l = i*2 + 1 
    var r = i*2 + 2
    var largest = i
    if (l < n && arr[l] > arr[largest]) {
        largest = l
    }
    if (r < n && arr[r] > arr[largest]) {
        largest = r
    }
    if (largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        heapify(arr, n, largest)
    }
}

function sort(arr) {
    const n = arr.length
    const lastRoot = Math.floor(n/2) - 1
    for (let i = lastRoot; i >= 0; i --) {
        heapify(arr, n, i) //从最后一个根节点开始后序遍历，每次遍历把最大的值浮动到i上，逐层向上传递
    }
    for (let i = n - 1; i >= 0; i --) { //从尾节点倒序遍历，每次将最大的arr[0]和尾节点交换，并且长度减少一，对交换后不合理的arr[0]进行堆重排。
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
    console.log(arr)
}

sort([1,6,3,5,7])