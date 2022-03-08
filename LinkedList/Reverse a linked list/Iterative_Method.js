// Iterative Method

/*

1.) Initialize three pointers prev as NULL, curr as head and next as NULL.
2.) Iterate through the linked list. In loop, do following. 
    // Before changing next of current, 
    // store next node 
    next = curr->next
    // Now change next of current 
    // This is where actual reversing happens 
    curr->next = prev 
    // Move prev and curr one step forward 
    prev = curr 
    curr = next
*/

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

function reverseList(list) {
  let current = list.head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
  return list;
}

let ll = new LinkedList();
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);
ll.display();
console.log("===After Reverse ===");
let revLL = reverseList(ll);
revLL.display();

// Time Complexity: O(n)
// Space Complexity: O(1)
