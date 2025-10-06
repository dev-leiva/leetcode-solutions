// Last updated: 10/6/2025, 7:17:24 PM
function isPalindrome(x: number): boolean {
  if(x < 0) return false

  const original = x.toString()
  let reversed = ''

  for(let i = original.length - 1; i >= 0; i--){
    reversed += original[i]
  }

  return reversed === original
};