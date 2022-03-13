class Node{
    constructor(key, value, next, prev){
        this.key = (key === undefined ? 0 : key);
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
    
    append(node) {
      if(this._size == 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      this._size++;
    }
    
    remove(node) {
        if(node === this.head) {
          this.head.prev = null;
          this.head = this.head.next;
          node.next = null;
        } else if(node === this.tail) {
          this.tail = this.tail.prev;
          node.prev = null;
          this.tail.next = null;
        } else if(node !== this.head && node !== this.tail) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
        }
        this._size--;
    }

    size() {
      return this._size;
    }
    
    removeTail() {
        const value = this.tail.key;
        if(this._size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.tail.prev;
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next = null;
        }
        
        this._size--;
        return value;
    }
}

class LRUCache {
    
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.list = new DoublyLinkedList();
    }
    
    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            const value = this.map.get(key).value;
            this.put(key, value);
            return value;
        }
        return -1;
    }
    
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = new Node(key, value);
        
        if(this.map.has(key)) {
            this.list.remove(this.map.get(key));
            this.map.delete(key);
        } else if(this.list.size() === this.capacity) {
            this.map.delete(this.list.removeTail());
        }
        
        this.list.append(node);
        this.map.set(key, node);
    }
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */