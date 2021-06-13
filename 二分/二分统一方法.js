var num,target
function find(left, right) {
    if (left >= right) {
        if (num[left] == target) {
            return true
        }
        return false
    }
    const mid = Math.floor((left+right)/2)
    if (num[mid] <= target) { //最重要是这里因为mid向下取整，所以这里左边能取到等于。
        find(left, mid)
    }
    else {
        find(mid+1, right)
    }
}