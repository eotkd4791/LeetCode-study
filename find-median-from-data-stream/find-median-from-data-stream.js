const MedianFinder = function() {
    this.max = new MaxPriorityQueue();
    this.min = new MinPriorityQueue();
    this.check = true;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.check) {
        this.max.enqueue(num); 
        this.min.enqueue(this.max.dequeue().element);
    }
    else {
        this.min.enqueue(num); 
        this.max.enqueue(this.min.dequeue().element);
    }
    this.check = !this.check;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
     if(this.check) {
         return (this.max.front().element + this.min.front().element) / 2;
     }
     return this.min.front().element;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */