/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const letters = {};
    let answer = 0;
    let left = 0;
    let right = 0;
    
    while(right < s.length) {
        while(letters[s[right]] >= 1) {
            letters[s[left]] > 0 && letters[s[left]]--;
            left++;
        }
        answer = Math.max(answer, right - left + 1);
        letters[s[right]] = 1;
        right++;
    }
    return answer;
};