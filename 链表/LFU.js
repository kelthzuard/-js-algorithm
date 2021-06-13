//地址：https://leetcode-cn.com/problems/lfu-cache/submissions/
//思路：维护两个hash,维护一个最小频率fre
//第一个是key的hash，通过key找到一个双向链表节点
//第二个是频率的hash，通过频率找到一个双向链表
//在第二个频率的hash中，头最新，尾最久。每次新加进来头插，每次删除。将freHash[fre]尾巴删除。
//每次get，将get的从当前链表删除，添加到频率加一的头插中。如果get的fre和最小fre相同并且当前链表为空，fre++
//put时将fre设置为一
function LFU( operators ,  k ) {
    function Node(key, val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
        this.used = 1
    }
    function ListNode() {
        this.head = new Node(null, null)
        this.tail = new Node(null, null)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    ListNode.prototype.remove = function(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        return node
    }
    ListNode.prototype.removeTail = function() {
        return this.remove(this.tail.prev)
    }
    ListNode.prototype.insertHead = function(node) {
        node.next = this.head.next
        node.prev = this.head
        node.next.prev = node
        this.head.next = node
    }
    ListNode.prototype.isEmpty = function() {
        return this.head.next.key == null
    }
    function L(capacity) {
        this.capacity = capacity
        this.num = 0
        this.keyHash = {}
        this.freHash = {
            1: new ListNode()
        }
        this.minFre = 1
    }
    L.prototype.get = function(key) {
        if (!this.keyHash[key]) {
            return -1
        }
        let node = this.keyHash[key]
        let nodeFre = node.used
        let listFre = this.freHash[nodeFre]
        listFre.remove(node)
        if (listFre.isEmpty() && this.minFre == nodeFre) {
            this.minFre ++
        }
        let nextFre = nodeFre + 1
        if (!this.freHash[nextFre]) {
            this.freHash[nextFre] = new ListNode()
        }
        node.used = nextFre
        this.freHash[nextFre].insertHead(node)
        return node.val
    }
    L.prototype.put = function(key, val) {
        if (this.keyHash[key]) {
            this.keyHash[key].val = val
            this.get(key)
            return 
        }
        
        if (this.num >= this.capacity) {
            
            let minList = this.freHash[this.minFre]
            let delkey = minList.removeTail().key
            delete this.keyHash[delkey]
            this.num --
        }
        let node = new Node(key, val)
        this.freHash[1].insertHead(node)
        this.keyHash[key] = node
        this.minFre = 1
        this.num ++
    }
    var lfu = new L(k)
    var output = []
    for (let val of operators) {
        switch(val[0]) {
            case 1: lfu.put(val[1], val[2]); break;
            case 2: output.push(lfu.get(val[1])); break;
        }
    }
    return output
}
module.exports = {
    LFU : LFU
};