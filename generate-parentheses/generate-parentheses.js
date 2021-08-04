/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const answer = [];
    recur(0, 0, '');
    return answer;
    
    function recur(left, right, str) {
        if(left === n && right === n) {
            answer.push(str);
        }
        if(left < n) {
            recur(left + 1, right, str + '(');
        }
        if(right < n && left > right) {
            recur(left, right + 1, str + ')');
        }
    }
};