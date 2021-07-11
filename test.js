var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    const output = []
    const n = nums.length
    for (let i = 0; i < n - 2; i ++) {
        if (i > 0 && nums[i] == nums[i-1]) continue
        let target = 0 - nums[i]
        let l = i + 1
        let r = n - 1
        while(l < r) {
            const s = nums[l] + nums[r]
            if (s == target) {
                output.push([nums[i],nums[l],nums[r]])
                while(l < r && nums[l] == nums[l+1]) {
                    console.log(l)
                    l ++
                }
                while(r >= l && nums[r] == nums[r-1]) {
                    console.log(r)
                    r --
                }
                l ++
                r --
            }
            else if (s < target) l ++
            else r --
        }
    }
    return output
};

console.log(threeSum([-1,0,1,2,-1,-4]))