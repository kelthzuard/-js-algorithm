//地址：https://leetcode-cn.com/problems/implement-trie-prefix-tree/
//原理，一个多叉树，每个子节点是下一个字母。并且有一个end字段代表当前是否有结束的字符。
function TreeNode(end) {
    this.end = end
    this.children = {}
}

var Trie = function() {
    this.tree = new TreeNode(null)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    function doInsert(node, i) {
        if (i >= word.length) {
            node.end = true
            return
        }
        let cur = word[i]
        if (!node.children[cur]) {
            node.children[cur] = new TreeNode(false)
        }
        doInsert(node.children[cur], i+1)
    }
    doInsert(this.tree, 0)
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    function doSearch(node, i) {
        if (i >= word.length) {
            if (node.end) {
                return true
            }
            return false
        }
        let cur = word[i]
        if (!node.children[cur]) {
            return false
        } 
        return doSearch(node.children[cur], i+1)
    }
    return doSearch(this.tree, 0)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    function doPre(node, i) {
        if (i >= prefix.length) return true
        let cur = prefix[i]
        if (node.children[cur]) {
            return doPre(node.children[cur], i+1)
        }
        else {
            return false
        }
    }
    return doPre(this.tree, 0)
};