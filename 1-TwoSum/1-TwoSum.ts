// Last updated: 10/6/2025, 6:57:16 PM
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for(let i = 0; i < nums.length; i++){
        const num = nums[i]

        // The value we are looking for
        const complement = target - num

        // Check if the complement exists
        if(map.has(complement)){
            return [map.get(complement), i]
        }

        // Store current number with index
        map.set(num, i)
    }
};