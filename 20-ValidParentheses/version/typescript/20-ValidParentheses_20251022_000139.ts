// Last updated: 10/22/2025, 12:01:39 AM
function isValid(s: string): boolean {
    const openSet = new Set(["(", "[", "{"])
    let closeMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    const unresolved = []

    for (let i = 0; i < s.length; i++) {
        if (openSet.has(s[i])) {
            unresolved.push(s[i])
            continue
        }
        let lastOpen = unresolved.pop()
        if (closeMap[lastOpen] !== s[i]) return false
    }

    if (unresolved.length > 0) {
        return false
    } else {
        return true
    }
};