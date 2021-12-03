/**
 * @param {string} digits
 * @return {string[]}
 */
const map = [,,
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z']
];

const letterCombinations = function(digits) {
    const n = digits.length;
    const result = [];
    
    n > 0 && recur(0, '');
    return result;
    
    function recur(index, letters) {
        if(letters.length === n) {
            result.push(letters);
            return;
        }
        for(let i=0; i<map[digits[index]].length; i++) {
            recur(index + 1, letters.concat(map[digits[index]][i]));
        }
    }
};