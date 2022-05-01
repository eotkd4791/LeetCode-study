class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int col = -1;
        int size = (int) matrix.size();
        int msize = matrix[0].size();
        
        for(int i = 0;i < size; i++){
            if(matrix[i][0] == 0) col = 0;
            for(int j = 1;j < msize; j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for(int i = size - 1; i >= 0; i--){
            for(int j = msize - 1; j >= 1; j--){
                if(matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
            if(col == 0) matrix[i][0] = 0;
        }
    }
};