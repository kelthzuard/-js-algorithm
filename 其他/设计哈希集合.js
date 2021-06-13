// 地址：https://leetcode-cn.com/problems/design-hashset/submissions/
// 思路：取一个大的质数作为base 比如 769
/**
 * Initialize your data structure here.
 */
 var MyHashSet = function() {
    this.base = 769;
    this.hash = new Array(this.base).fill(0).map(() => {
        return [];
    });
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    key = Number(key);
    let reflect = key % this.base;
    for (let val of this.hash[reflect]) {
        if (val == key) {
            return;
        }
    }
    this.hash[reflect].push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    key = Number(key);
    let reflect = key % this.base;
    for (let i = 0; i < this.hash[reflect].length; i ++) {
        if (this.hash[reflect][i] == key) {
            this.hash[reflect].splice(i, 1);
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    key = Number(key);
    let reflect = key % this.base;
    for (let val of this.hash[reflect]) {
        if (val == key) {
            return true;
        }
    }
    return false
};
