class Node {
  constructor(val, next){
    this.val = val;
    this.next = next
  }
}

class Stack {
  constructor() {
    this.head = null
  }

  push(val) {
    const node = new Node(val, this.head);
    this.head = node;
  }

  pop() {
    const val = this.head.val;
    this.head = this.head.next;
    return val;
  }
}

export default Stack;

// const myStack = new Stack();
// myStack.push(1);
// console.log(myStack.head);
// myStack.push(2);
// console.log(myStack.head);
// myStack.push(3);
// console.log(myStack.head);
// var test = myStack.pop();
// console.log(test);
// var test2 = myStack.pop();
// console.log(test2);
// console.log(myStack.head);
