// Last updated: 10/31/2025, 6:22:17 PM
function reverse(x: number): number {
    let str = x.toString()
    const isNegative = str.startsWith('-')
    str = isNegative ? str.substring(1) : str

    const MAX_LIMIT = "2147483647"; // 2^31 - 1
    const MIN_ABS_LIMIT = "2147483648"; // | -2^31 |
    const limitString = isNegative ? MIN_ABS_LIMIT : MAX_LIMIT;
    
    // Clean trailing zeros from the end
    str = str.replace(/0+$/, '');

    if (str === '') {
        return 0; 
    }

    const reversed = str.split('').reverse().join('')

    if(reversed.length > limitString.length) {
        return 0
    }

    if(reversed.length === limitString.length && reversed > limitString) {
        return 0
    }

    return Number(isNegative ? `-${reversed}` : reversed)
};