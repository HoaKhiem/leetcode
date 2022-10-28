def twoSum(nums,target):
    di = {}
    for i in range(len(nums)):
        s = target - nums[i]
        if s in di:
            return [di[i], i]
        else: di[nums[i]] = i