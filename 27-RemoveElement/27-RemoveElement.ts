// Last updated: 10/6/2025, 6:57:15 PM
function removeElement(nums, val) {
  let count = 0;
  let lengthOffset = 0;
  let countDown = nums.length;
  let i = 0;
  while (countDown > 0) {
    if (nums[i - lengthOffset] === val) {
      nums.splice(i - lengthOffset, 1);
      lengthOffset++;
    } else {
      count++;
    }
    i++;
    countDown--;
  }
  return count;
}