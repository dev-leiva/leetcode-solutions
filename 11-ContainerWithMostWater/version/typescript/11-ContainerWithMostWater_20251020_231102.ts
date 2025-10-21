// Last updated: 10/20/2025, 11:11:02 PM
function maxArea(height: number[]): number {
    let highest = 0
    let left = 0
    let right = height.length - 1

    while (right > left) {
        let area = Math.min(height[left], height[right]) * (right - left)
        if (area > highest) {
            highest = area
        }
        if (height[right] > height[left]) {
            left++
            continue
        }
        right--
    }

    return highest
};
