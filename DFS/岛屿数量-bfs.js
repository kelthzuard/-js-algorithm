var numIslands = function(grid) {
    var w = grid.length;
    var h = grid[0].length;
    function bfs(i, j) {
        var queue = [[i,j]];
        while(queue.length > 0) {
            let block = queue.shift();
            let i = block[0];
            let j = block[1];
            grid[i][j] = 2;
            if (i > 0 && grid[i-1][j] == 1) {queue.push([i-1,j]);}
            if (j > 0 && grid[i][j-1] == 1) {queue.push([i,j-1]);}
            if (i < w-1 && grid[i+1][j] == 1) {queue.push([i+1,j]);}
            if (j < h-1 && grid[i][j+1] == 1) {queue.push([i,j+1]);}
        }

    }
    var total = 0;
    for (let i = 0;i < w; i ++) {
        for (let j = 0; j < h; j ++) {
            if (grid[i][j] == 1) {
                total += 1;
                bfs(i, j);
            }
        }
    }
    return total;
};