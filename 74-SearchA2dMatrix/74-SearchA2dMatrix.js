// Last updated: 10/6/2025, 6:57:14 PM
var searchMatrix = function(matrix, target) {
    if (matrix.length === 1) return matrix[0].includes(target);
    
    if (!checkIfIsInRange(
        target,    
        matrix.at(0).at(0), 
        matrix.at(-1).at(-1))) return false;
    return recursiveSearch(matrix, target);
};


const checkIfIsInRange = (target, first, last) => {
    if (target >= first && target <= last) {
        return true
    } else {
        return false 
    }
}

const recursiveSearch = (matrix, target) => {
    const first = matrix.at(0).at(0);
    
    const middleIndex = Math.ceil(matrix.length/2)
    const lastMiddle = matrix[middleIndex].at(-1)

    if (matrix.length <= 3) {
        switch (matrix.length) {
            case 1:
                return matrix[0].includes(target)
            case 2:
                return matrix[0].includes(target) || 
                matrix[1].includes(target)
            case 3:
                return matrix[0].includes(target) || 
                matrix[1].includes(target) ||
                matrix[2].includes(target)
        }
    } else {
        let newMatrix = checkIfIsInRange(target, first, lastMiddle) ? 
            matrix.splice(0, middleIndex + 1) : 
            matrix.splice(middleIndex, matrix.length - 1);
        console.log(newMatrix);

        if (newMatrix.length === 1){
            return newMatrix[0].includes(target)
        } else {
            return recursiveSearch(newMatrix, target)
        }
    }
}