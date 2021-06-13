// 地址：https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/submissions/
//注意三点
//首先去掉头部所有空格
//判断符号位
//判断字段，属于数字加入，否则中止
//判断越界
var strToInt = function(str) {
    var num = []
    var i = 0
    var isMinus = false
    while(str[i] == ' ') {
        i ++
    }
    if (str[i] == '-' || str[i] == '+') {
        isMinus = (str[i] == '-')?true:false
        i ++
    }
    while(i < str.length) {
        let cur = str[i]
        if (cur >= 0 && cur <= 9 && cur != ' ') {
            num.push(str[i])
        }
        else {
            break
        }
        i ++
    }
    if (num.length == 0) {
        return 0
    }
    num = parseInt(num.join(""))
    if (isMinus) {
        num = 0 - num
        if (num < 0 - Math.pow(2, 31)) {return (0 - Math.pow(2, 31))}
    }
    else {
        if (num >= Math.pow(2, 31)) {return (Math.pow(2, 31) - 1)}
    }
    return num
};