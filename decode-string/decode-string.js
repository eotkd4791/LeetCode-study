/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const parseStr = n => str => str.repeat(n);
    const visit = Array(30).fill(false);
    return recur(0);
    
    function recur(index) {
        let repeat = null;
        let numStr = '';
        let result = '';
        
        for(let i=index; i<s.length; i++) {
            if(!visit[i]) {
                visit[i] = true;
                if(/[0-9]/.test(s[i])) {
                    numStr+=s[i];
                } else if(s[i] === '[') {
                    repeat = parseStr(+numStr);
                    result += repeat(recur(i));
                    numStr = '';
                    repeat = null;
                } else if(s[i] === ']') {
                    return result;
                } else {
                    result += s[i];
                }   
            }
        }
        return result;
    }
};
