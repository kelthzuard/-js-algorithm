//地址：https://leetcode-cn.com/problems/merge-intervals/
//归并可以在排序中就把区间合并好，少 O(n)的耗时，但是空间复杂度高了太多。不推荐
var merge = function(intervals) {
    function sort(left, right) {
        if (left >= right) {return [intervals[left]];}
        let mid = Math.floor((left+right)/2);
        let left_arr = sort(left, mid);
        let right_arr = sort(mid+1, right);
        return mer(left_arr,right_arr); 
    }
    function mer(left, right) {
        let arr = [];
        for (let j = 0,k = 0;(j < left.length || k < right.length);) {
            let l = (j >= left.length)?[Infinity, Infinity]:left[j];
            let r = (k >= right.length)?[Infinity, Infinity]:right[k];
            let insert = null;
            if (l[0] < r[0]) {
                insert = l;
                j ++;
            } else {
                insert = r;
                k ++;
            }
            if (arr.length == 0) {arr.push(insert);}
            else {
                let prev = arr[arr.length-1];
                if (prev[1] >= insert[0]) {
                    arr[arr.length-1] = [prev[0], Math.max(prev[1], insert[1])];
                } else {
                    arr.push(insert);
                }
            }
        }
        return arr;
    }
    return sort(0, intervals.length-1);
};