/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
class Stack {
    constructor() {
        this._data = [];
    }
    push(arg) {
        this._data.push(arg);
    }
    pop() {
        if(this.empty()) {
           throw new Error('Nothing To Pop!');
        }
        return this._data.pop();
    }
    size() {
        return this._data.length;
    }
    top() {
        return this._data[this.size() - 1];
    }
    empty() {
        return this.size() === 0;
    }
}

const dailyTemperatures = function(temperatures) {
    const stack = new Stack();
    const answer = new Array(temperatures.length).fill(0);
    
    for(let i=0; i<temperatures.length; i++) {
        while(!stack.empty() && temperatures[stack.top()] < temperatures[i]) {
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }
    while(!stack.empty()) {
        answer[stack.pop()] = 0;
    }
    return answer;  
};