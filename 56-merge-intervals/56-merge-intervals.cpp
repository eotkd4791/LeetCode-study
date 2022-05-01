class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>> answer;
        
        sort(begin(intervals), end(intervals));
        
        answer.push_back(intervals[0]);
        for (int i = 1; i < size(intervals); i++) {
            if (answer.back()[1] >= intervals[i][0]) {
                auto last = answer.back();
                answer.pop_back();
                last[1] = max(intervals[i][1], last[1]);
                answer.push_back(last);
            } else {
                answer.push_back(intervals[i]);
            }
        }
        return answer;
    }
};
