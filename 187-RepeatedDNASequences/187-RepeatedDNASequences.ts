// Last updated: 10/7/2025, 5:46:00 PM
function findRepeatedDnaSequences(s: string): string[] {
    // Early return
    if (s.length < 10) return []

    const seen = new Set<string>()
    const result = new Set<string>()
    let sub = ''

    // Sliding window
    for(let i = 0; i < s.length - 1; i++){
        sub = s.slice(i,i+10)
        if(sub.length < 10) break
        if(seen.has(sub)){
            result.add(sub)
            continue
        }
        seen.add(sub)
    }
    return Array.from(result)
};