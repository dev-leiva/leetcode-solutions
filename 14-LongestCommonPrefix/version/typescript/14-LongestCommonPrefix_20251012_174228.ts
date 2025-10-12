// Last updated: 10/12/2025, 5:42:28 PM
function longestCommonPrefix(strs: string[]): string {
    // Early return if only one element
    if (strs.length === 1) return strs[0]

    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++) {
        const current = strs[i]
        if(prefix.length === 0) break

        while(prefix.length > current.length){
            prefix = prefix.slice(0,-1)
        }

        while(prefix !== current.slice(0, prefix.length)){
            prefix = prefix.slice(0,-1)
        }
    }

    return prefix    
};