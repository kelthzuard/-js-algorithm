//地址：https://leetcode-cn.com/problems/design-hashmap/submissions/
//思路：和哈希集合基本一直，只不过hash里保存[key,value]数组
/**
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
    this.base = 769;
    this.hash = new Array(this.base).fill(0).map(() => {
        return [];
    });
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const index = key % this.base;
    for (let i = 0; i < this.hash[index].length; i ++) {
        if (this.hash[index][i][0] == key) {
            this.hash[index][i][1] = value;
            return;
        }
    }
    this.hash[index].push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = key % this.base;
    for (let i = 0; i < this.hash[index].length; i ++) {
        if (this.hash[index][i][0] == key) {
            return this.hash[index][i][1];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = key % this.base;
    for (let i = 0; i < this.hash[index].length; i ++) {
        if (this.hash[index][i][0] == key) {
            this.hash[index].splice(i, 1);
        }
    }
};