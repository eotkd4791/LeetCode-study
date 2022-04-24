/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	const dp = Array(nums.length).fill(1);
	let dist = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				dist = Math.max(dist, dp[i]);
			}
		}
	}
	return dist;
}