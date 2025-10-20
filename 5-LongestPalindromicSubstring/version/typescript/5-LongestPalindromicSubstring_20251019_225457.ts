// Last updated: 10/19/2025, 10:54:57 PM
function longestPalindrome(s: string): string {
    // Early return
    if (s.length < 2) return s

    let start = 0
    let maxLength = 1

    function expand(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1
            if (currentLength > maxLength) {
                maxLength = currentLength
                start = left
            }
            left--
            right++
        }
    }

    // Iterate through all possible centers
    for (let i = 0; i < s.length; i++) {
        // Center 1: Single character
        expand(i, i)

        // Center 2: Between two characters
        expand(i, i + 1)
    }

    return s.substring(start, start + maxLength)
}