/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    let answer = 0;
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === '1') {
                if(i > 0 && j > 0) {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j],
                        matrix[i][j - 1],
                        matrix[i - 1][j - 1]
                    ) + 1;
                }
                answer = Math.max(answer, matrix[i][j]);
            }
        }
    }
    return answer ** 2;
};