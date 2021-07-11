// 地址https://leetcode-cn.com/problems/string-compression/
var compress = function(chars) {
    let skip = 0
    const n = chars.length
    for (let i = 0; i+skip < n; i ++) {
        let temp = 0
        while(i + temp + skip < n - 1 && chars[i + skip] == chars[i + skip + temp + 1]) {
            temp ++
        }
        if (temp > 0) {
            chars[i] = chars[i+skip]
            let str = temp + 1
            str = str + ''
            for (let j = 0; j < str.length; j ++) {
                chars[i+j+1] = str[j]
                
            }
            skip += temp - str.length
            i += str.length
        }
        else {
            chars[i] = chars[i+skip]
        }
    }
    return n - skip
};