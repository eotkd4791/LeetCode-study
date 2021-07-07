/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    const segments = saveSegments();
    return getPartitions();
    
    function saveSegments() {
        const map = {};
        for(let i=0; i<s.length; i++) {
            map.hasOwnProperty(s[i])
                ? map[s[i]].to = i
                : map[s[i]] = { from : i, to: i};
        }
        return map;
    }
    
    function getPartitions() {
        const result = [];
        let standardFrom = segments[s.charAt(0)].from;
        let standardTo = segments[s.charAt(0)].to;
        const isInRange = target => (standardFrom <= target && target <= standardTo); 
        
        for(const letter of s) {
            const {from, to} = segments[letter];
            if(isInRange(from) || isInRange(to)) {
                standardTo = standardTo < to ? to : standardTo;
            } else {
                result.push(standardTo - standardFrom + 1);
                standardFrom = from;
                standardTo = to;
            }
        }
        return result.concat(standardTo - standardFrom + 1);
    }
};