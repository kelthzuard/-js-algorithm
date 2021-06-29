// 思路：设置visited数组，0代表没有访问，1代表访问过但没有回溯到，2代表回溯到。当一个节点访问过并且访问周围所有节点并回溯到自己后，他的
// 其他所有节点都被添加到result数组中了，再把他自己添加到result数组中。这也从栈顶到栈底就是一条拓扑排序链。每次访问后但又访问到1时代表有环，直接返回false
var canFinish = function(numCourses, prerequisites) {
    var mapping = {}
    for (let v of prerequisites) {
        if (mapping.hasOwnProperty(v[1])) {
            mapping[v[1]].push(v[0])
        }
        else {
            mapping[v[1]] = [v[0]]
        }
    }
    var visited = new Array(numCourses).fill(0)
    var valid = true
    //var result = []
    function dfs(node) {
        visited[node] = 1
        if (mapping.hasOwnProperty(node)) {
            for (let n of mapping[node]) {
                if (visited[n] === 0) dfs(n)
                else if(visited[n] === 1) {
                    valid = false
                    return
                } 
                else if (visited[n] === 2) continue
            }
        }
        visited[node] = 2
        //result.push(node)
    }
    for (let i = 0; i < numCourses; i ++) {
        if (visited[i] === 0) dfs(i)
    }
    return valid
};