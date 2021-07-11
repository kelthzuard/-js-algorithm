function fibonaci() {
    this.memo = [0, 1]
    return function(n) {
        if (n <= this.memo.length) return this.memo[n]
        for (let i = this.memo.length; i <= n; i ++) {
            this.memo[i] = this.memo[i-1] + this.memo[i-2]
        }
        return this.memo[n]
    }
}

const f = fibonaci()
console.log(f(4))
console.log(f(3))
