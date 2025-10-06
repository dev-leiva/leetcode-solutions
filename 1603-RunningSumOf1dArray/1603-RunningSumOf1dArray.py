# Last updated: 10/6/2025, 6:57:09 PM
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        iteration = 0
        result = [nums[0]]
        for i in range(len(nums) - 1):
            result.append(nums[i+1] + result[i])
        return result