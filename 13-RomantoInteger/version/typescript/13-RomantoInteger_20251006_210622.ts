// Last updated: 10/6/2025, 9:06:22 PM
function romanToInt(s: string): number {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        let current = map[s[i]]
        let next = map[s[i+1]] ?? 0
        if (next > current) {
            result += next - current
            i++
            continue
        }
        result += current
    }

    return result
};