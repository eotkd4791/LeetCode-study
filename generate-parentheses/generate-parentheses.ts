function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    recur('');
    return result;
    
    function recur(brackets: string) {
        if(brackets.length === n * 2) {
            isPair(brackets) && result.push(brackets);
            return;
        }
        recur(brackets.concat('('));
        recur(brackets.concat(')'));
    }
    
    function isPair(brackets: string): boolean {
        const arr: '('[] = [];
        
        for(let i=0; i<brackets.length; i++) {
            if(brackets[i] === '(') {
                arr.push(brackets[i] as '(')
            } else {
                if(arr.length === 0) {
                    return false;
                }
                arr.pop();   
            }
        }
        return arr.length === 0;
    }
};