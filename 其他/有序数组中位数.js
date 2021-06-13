//地址：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/
//太难了，看题解，没做出来
function findMedianinTwoSortedAray( arr1 ,  arr2 ) {
    var k = (arr1.length + arr2.length) / 2;
    function find(start1, start2) {
        if (k == 1) {
            return Math.min(arr1[start1], arr2[start2])
        }
        let mid;
        if (arr1.length % 2 == 0) {
            mid = Math.floor(k/2) - 1;
        }else {
            mid = Math.floor(k/2);
        }
        
        let mid1 = start1 + mid;
        let mid2 = start2 + mid;
        if (arr1[mid1] == arr2[mid2]) {
            return arr1[mid1];
        }
        else if (arr1[mid1] > arr2[mid2]) {
            start2 = mid2 + 1;
        }
        else {
            start1  = mid1 + 1;
        }
        if (arr1.length % 2 == 0) {
            k = k - Math.floor(k/2);
        }
        else {
            k = k - Math.floor(k/2) - 1;
        }
        return find(start1, start2);
    }
    return find(0, 0);
}
module.exports = {
    findMedianinTwoSortedAray : findMedianinTwoSortedAray
};