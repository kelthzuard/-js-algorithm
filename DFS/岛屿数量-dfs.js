//地址：https://leetcode-cn.com/problems/number-of-islands/solution/number-of-islands-shen-du-you-xian-bian-li-dfs-or-/
// 方法：当遇到一个岛屿后我们要把岛屿所有块都坐上标记，使用dfs或者bfs进行一个岛屿的标记，为了防止重复标记，使用和1不一样的2或者0进行标记。
function solve( grid ) {
    var w = grid.length;
    var h = grid[0].length;
    function dfs(i, j) {
        grid[i][j] = 2;
        if (i > 0 && grid[i-1][j] == 1) {dfs(i-1, j);}
        if (j > 0 && grid[i][j-1] == 1) {dfs(i, j-1);}
        if (i < w-1 && grid[i+1][j] == 1) {dfs(i+1, j);}
        if (j < h-1 && grid[i][j+1] == 1) {dfs(i, j+1);}
    }
    var total = 0;
    for (let i = 0;i < w; i ++) {
        for (let j = 0; j < h; j ++) {
            if (grid[i][j] == 1) {
                total += 1; //在遇到一个新岛屿后进行dfs搜索。
                dfs(i, j);
            }
        }
    }
    return total;
}
module.exports = {
    solve : solve
};