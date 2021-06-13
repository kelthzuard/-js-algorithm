function sort(arr, start, end) {
    console.log(start, end)
    if (end <= start) {return;} // 如果只剩一个元素直接返回，至少两个元素比较
    let mid = Math.floor((start + end)/2);
    sort(arr, start, mid); // 一直往下找直到左右都只剩一个元素
    sort(arr, mid+1, end); // 因为用的floor向下取整，所以中介线往右拉。
    merge(arr, start, mid, end); // 将左右合并
}

function merge(arr, start, mid, end) {
    var arr1 = arr.slice(start, mid+1); // 用slice浅拷贝
    var arr2 = arr.slice(mid+1, end + 1); // 因为用的floor向下取整，所以中介线往右拉。
    for (let i = start,j=0,k=0;i <= end; i ++) {
        let n1 = (j >= arr1.length)?Infinity:arr1[j]; //Infinity代表无限大，如果是递减排序用-Infinity
        let n2 = (k >= arr2.length)?Infinity:arr2[k];
        if (n1 > n2) {
            arr[i] = arr2[k];
            k ++;
        }
        else {
            arr[i] = arr1[j];
            j ++;
        }
    }
}

var ex = [1,3,5,2,6,7];
sort(ex, 0, ex.length-1)
console.log(ex);