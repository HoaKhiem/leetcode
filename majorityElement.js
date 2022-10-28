var majorityElement = function(nums) {
    let x = nums.length / 2;
    let r = {}
    for(let i in nums){
        if(r[nums[i]]){
            r[nums[i]] = r[nums[i]] + 1
        }
        else{
            r[nums[i]] = 1
        }
        if(r[nums[i]] > x){
            return nums[i]
        }
    }
};