// 地址：https://leetcode-cn.com/problems/course-schedule/submissions/
// 思路：维护一个入度得节点，如果入度为0，代表是起始节点，就加入。每次遍历一个节点时，将这个节点去掉，即把所有关联得下一个节点得入度减一，如果
// 入度为0，再加入，循环，计数遍历得节点，如果最后为总结点，则为true
var canFinish = function(numCourses, prerequisites) {
    var indegree = new Array(numCourses).fill(0)
    var mapping = {}
    for (let v of prerequisites) {
        if (mapping.hasOwnProperty(v[1])) {
            mapping[v[1]].push(v[0])
        }
        else {
            mapping[v[1]] = [v[0]]
        }
        indegree[v[0]] += 1
    }
    var queue = []
    for (let i = 0; i < numCourses; i ++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }
    var count = 0
    while(queue.length) {
        var startNode = queue.pop()
        count ++
        if (mapping.hasOwnProperty(startNode)) {
            for (let nextNode of mapping[startNode]) {
                indegree[nextNode] -= 1
                if (indegree[nextNode] === 0) {
                    queue.push(nextNode)
                }
            }
        }

    }
    return count === numCourses
};