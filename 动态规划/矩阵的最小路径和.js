// 地址：https://www.nowcoder.com/practice/7d21b6be4c6b429bb92d219341c4f8bb?tpId=117&tqId=37823&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 动态规划：从目的地开始倒着来
function minPathSum( matrix ) {
    for (let i = matrix.length-1; i >= 0; i --) {
        for (let j = matrix[0].length-1; j >= 0; j --) {
            let min = Infinity;
            let cur = matrix[i][j];
            if (i < matrix.length - 1) {
                if (matrix[i+1][j] + cur < min) {
                    min = matrix[i+1][j] + cur;
                }
            }
            if (j < matrix[0].length - 1) {
                if (matrix[i][j+1] + cur < min) {
                    min = matrix[i][j+1] + cur;
                }
            }
            if (i == matrix.length-1 && j == matrix[0].length-1) {
                min = cur;
            }
            matrix[i][j] = min;
        }
    }
    return matrix[0][0];
}
module.exports = {
    minPathSum : minPathSum
};