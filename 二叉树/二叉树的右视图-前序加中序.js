// 地址：https://www.nowcoder.com/practice/c9480213597e45f4807880c763ddd5f0?tpId=117&tqId=37848&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 方法，根据中序和前序复原二叉树，相当于前序遍历，在每个深度第一个元素进入，否则元素权重大的进入，元素权重左减右增。
function solve( xianxu ,  zhongxu ) {
    var index = -1;
    var output = [];
    var level_list = [];
    var hash = new Map();
    zhongxu.forEach((v,i) => {
        hash.set(v,i);
    })
    function find(level, start, end, nodeLevel) {
        if (start > end) {return null;}
        index ++;
        //console.log(xianxu[index],nodeLevel,level,level_list);
        if (level > output.length) {
            output.push(xianxu[index]);
            level_list.push(nodeLevel);
        }
        else if (nodeLevel > level_list[level-1]) {
            output[level-1] = xianxu[index];
            level_list[level-1] = nodeLevel;
        }
        if (start == end) {
            return;
        }
        let n_index = hash.get(xianxu[index]);
        find(level+1, start, n_index-1, nodeLevel-(200-level)); //先左后右，权重左增右减。
        find(level+1, n_index+1, end, nodeLevel+(200-level));
    }
    find(1, 0, xianxu.length-1, 0);
    return output;
}
module.exports = {
    solve : solve
};