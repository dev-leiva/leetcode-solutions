// Last updated: 10/6/2025, 6:57:13 PM
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const temp = structuredClone(nums1);
  let n2 = 0;
  let n1 = 0;
  for (let i = 0; i < m + n; i++) {
    if (n1 < m && n2 < n) {
      if (temp[n1] > nums2[n2]) {
        nums1[i] = nums2[n2];
        n2++;
        continue;
      } else {
        nums1[i] = temp[n1];
        n1++;
        continue;
      }
    }
    if (n1 < m) {
      nums1[i] = temp[n1];
      n1++;
      continue;
    }

    if (n2 < n) {
      nums1[i] = nums2[n2];
      n2++;
      continue;
    }
  }
};