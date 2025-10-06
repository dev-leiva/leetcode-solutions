// Last updated: 10/6/2025, 6:57:12 PM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minimum = 0;
    const arr = toArray(root).sort((a,b) => a-b);
    let diff = Number.MAX_VALUE;
    
    for (let i=0; i<arr.length; i++) {
        if(arr[i+1] - arr[i] < diff) {
            diff = arr[i+1] - arr[i];
        }
    }
    
    return diff;

};

var toArray = (root, output = []) => {
    if (root) {
        toArray(root.left, output)
        output.push(root.val)
        toArray(root.right, output)
        return output;
    }
}