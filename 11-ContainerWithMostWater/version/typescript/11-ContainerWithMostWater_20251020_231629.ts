// Last updated: 10/20/2025, 11:16:29 PM
function maxArea(height: number[]): number {
    let highest = 0
    let left = 0
    let right = height.length - 1

    while (right > left) {
        highest = Math.max(highest, Math.min(height[left], height[right]) * (right - left))

        if (height[right] > height[left]) {
            left++
            continue
        }
        right--
    }

    return highest
};
