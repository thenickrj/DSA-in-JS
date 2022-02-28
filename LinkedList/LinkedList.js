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

  //  Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert at last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //   If first index
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get an index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.val);
      }
      count++;
      current = current.next;
    }
  }
  // Remove a node
  removeAt(index) {
    if (index > 0 && index > this.state) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);

ll.removeAt(2);
ll.clearList();
ll.printList();
// ll.getAt(2);

// console.log(ll.head);
// console.log(ll.head.next);
// console.log(ll.head.next.next);
// console.log(ll.head.next.next.next);
// console.log(JSON.stringify(ll));
