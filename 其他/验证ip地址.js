// 地址：https://leetcode-cn.com/problems/validate-ip-address/
// 思路
// v4：
// 1. 长度必须是3*4
// 2. 每组都必须是数字(2进制)，且小于255
// 3. 可以单个0，但不能0开头还有其他数

// v6
// 1. 长度必须是4*8
// 2. 每组必须都是十六进制，不会有f以上的（不含f）
// 3. 不能是空的 ::
var validIPAddress = function(IP) {
    IP = IP.split(':')
    var v6 = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F']
    v6 = new Set(v6)
    if (IP.length > 1) {
        if (IP.length != 8) return 'Neither'
        for (let val of IP) {
            if (val.length > 4) return 'Neither'
            if (val.length == 0) return 'Neither'
            for (let v of val) {
                if (isNaN(parseInt(v)) && !v6.has(v)) return 'Neither'
            }
        }
        return 'IPv6'
    }
    else {
        IP = IP[0].split('.')
        if (IP.length != 4) return 'Neither'
        for (let val of IP) {
            if (val.length > 3 || val.length == 0) return 'Neither'
            if (val.length > 1 && val[0] == '0') return 'Neither'
            if (val > 255) return 'Neither'
            for (let v of val) {
                if (isNaN(parseInt(v))) return 'Neither'
            }
        }
        return 'IPv4'
    }
};