function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const visit: number[] = Array(201).fill(0);
    candidates.forEach(candidate => visit[candidate] = Math.floor(target / candidate));
    recur(0, 0, []);
    return result;

    function recur(idx: number, sum: number, arr: number[]) {
        console.log(sum)
        if(sum > target) {
            return;
        } else if(sum === target) {
            result.push(arr);
            return;
        }

        for(let i=idx; i<candidates.length; i++) {
            const candidate = candidates[i];
            if(visit[candidate] > 0) {
                visit[candidate]--;
                recur(
                    visit[candidate] > 0 ? i : i + 1,
                    sum + candidate,
                    arr.concat(candidate)
                );
                visit[candidate]++;
            }
        }
    }
};