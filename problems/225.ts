/* Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:
- void push(int x) Pushes element x to the top of the stack.
- int pop() Removes the element on the top of the stack and returns it.
- int top() Returns the element on the top of the stack.
- boolean empty() Returns true if the stack is empty, false otherwise.

Notes:
- You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 
Example 1:
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 
Constraints:
- 1 <= x <= 9
- At most 100 calls will be made to push, pop, top, and empty.
- All the calls to pop and top are valid.

Follow-up: Can you implement the stack using only one queue?
*/

class MyStack {
	queue: Array<number>;
	topVal: number;

	constructor() {
		this.queue = new Array<number>();
		this.topVal = -1;
	}

	push(x: number): void {
		this.topVal = x;
		this.queue.push(x);
	}

	pop(): number {
		let n = this.queue.length - 1;
		while (n--) {
			this.topVal = this.queue.shift() ?? -1; // note shift is slow but JS does not have a proper implementation of queues
			if (this.topVal !== -1) this.queue.push(this.topVal);
		}
		const removed = this.queue.shift() ?? -1;
		return removed;
	}

	top(): number {
		return this.topVal;
	}

	empty(): boolean {
		return !this.queue.length;
	}
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

// Testing
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.empty());

