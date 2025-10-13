// Last updated: 10/13/2025, 7:57:43 PM
function letterCombinations(digits: string): string[] {
    // Early return 
    if (digits.length === 0) return [];

    const KEYPAD_MAP: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'], 
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'], 
        '6': ['m', 'n', 'o'], 
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    const result: string[] = []

    function backtrack(index: number, currentCombination: string): void {
        if (index === digits.length) {
            result.push(currentCombination)
            return
        }

        const digit = digits[index]
        const letters = KEYPAD_MAP[digit]

        for (const letter of letters) {
            const newCombination = currentCombination + letter;
            backtrack(index + 1, newCombination);
        }
    }

    backtrack(0, "");

    return result;
}
