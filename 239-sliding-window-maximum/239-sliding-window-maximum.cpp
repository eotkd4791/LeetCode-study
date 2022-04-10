class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> answer(n - k + 1, 0);
        deque<int> dq;
        
        int i = 0;
        
        while(i < k){
            if(dq.empty()) dq.push_back(i);
            else {
                if(nums[dq.front()] >= nums[i]){
                    while(!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
                    dq.push_back(i);
                }
                else dq.push_front(i);
            }
            i++;
        }
        
        int j = 0;
        answer[j++] = nums[dq.front()];
        while(i < n){
             if(!dq.empty() && nums[dq.front()] >= nums[i]){
                while(!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
                dq.push_back(i);
             }
            else dq.push_front(i);
            
            while(!dq.empty() && dq.front() < i - k + 1) dq.pop_front();
            answer[j++] = nums[dq.front()];
            
            if(!dq.empty() && dq.front() == i - k + 1) dq.pop_front();
            i++;
        }
        return answer;
    }
};