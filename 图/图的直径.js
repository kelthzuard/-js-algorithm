// 地址：https://www.nowcoder.com/practice/a77b4f3d84bf4a7891519ffee9376df3?tpId=117&tqId=37824&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：构造邻接表。即每个节点存和他邻接的节点。在存的时候正向存了反向也要存。这样保证是连通图。然后dfs的时候注意判断结束条件，需要用visited来防止环。
function solve( n ,  Tree_edge ,  Edge_value ) {
    function GraphNode() {
        this.arr = []
        this.weight = []
        this.visited = false
    }
    var graph = new Array(n).fill(0).map(() => new GraphNode())
    for (let i = 0; i < Tree_edge.length; i ++) {
        let val = Tree_edge[i]
        let start = val.start
        let end = val.end
        graph[start].arr.push(end)
        graph[start].weight.push(Edge_value[i])
        graph[end].arr.push(start)
        graph[end].weight.push(Edge_value[i])
    }
    var max = 0
    function traver(nodeIndex) {
        let node = graph[nodeIndex]
        node.visited = true
        if (node.arr.length == 0) {
            return 0
        }
        let maxArr = []
        for (let i = 0; i < node.arr.length; i ++) {
            if (!graph[node.arr[i]].visited) {
                maxArr.push(traver(node.arr[i]) + node.weight[i])
            }
        }
        if (maxArr.length == 0) { return 0 }
        maxArr.sort((a, b) => {
            return b - a
        })
        if (maxArr.length > 1 && (maxArr[0] + maxArr[1] > max)) {
            max = maxArr[0] + maxArr[1]
        } 
        else if (maxArr[0] > max){
            max = maxArr[0]
        }
        return Math.max.apply(null, maxArr)
    }
    traver(0)
    return max
}
module.exports = {
    solve : solve
};