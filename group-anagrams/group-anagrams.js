/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const check = {};
    const arr = Array(26);
    
    strs.forEach(str => {
        arr.fill(0);
        for(const letter of str) {
            const index = letter.charCodeAt() - 97;
            arr[index]++;
        }
        const dict = arr.toString();
        dict in check
            ? check[dict].push(str)
            : check[dict] = [str];
    });
    
    return Object.values(check);
};