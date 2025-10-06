// Last updated: 10/6/2025, 8:38:59 PM
function isPalindrome(x: number): boolean {
  // Without converting the integer to string
  
  // Early returns for edge scenarios
  if(x < 0 || x % 10 === 0 && x !== 0) return false
  if(x < 10) return true

  let reversed = 0
  let temp = x

  // Reverse the number mathematically
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10)
    temp = Math.floor(temp / 10)
  }

  return reversed === x
};
