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

  insertAt(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }

  insertAtLast(val) {
    let node = new Node(val);
    let current;

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

  display() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

function getCount(head) {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

function getNode(head1, head2) {
  let c1 = getCount(head1);
  let c2 = getCount(head2);
  let d;
  if (c1 > c2) {
    d = c1 - c2;
    return _getIntersectionNode(d, head1, head2);
  } else {
    d = c2 - c1;
    return _getIntersectionNode(d, head2, head1);
  }
}

function _getIntersectionNode(d, node1, node2) {
  let current1 = node1;
  let current2 = node2;
  for (let i = 0; i < d; i++) {
    if (current1 == null) {
      return -1;
    }
    current1 = current1.next;
  }
  while (current1 && current2) {
    // console.log(current1.val, current2.val);
    if (current1.val === current2.val) {
      return current1.val;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  return -1;
}

let ll1 = new LinkedList();
let ll2 = new LinkedList();

ll1.insertAtLast(3);
ll1.insertAtLast(3);
ll1.insertAtLast(6);
ll1.insertAtLast(6);
ll2.insertAtLast(30);

// ll1.insertAtLast(9);
// ll1.insertAtLast(15);
// ll1.insertAtLast(30);

// console.log("---", ll1.head);

ll2.insertAtLast(3);
ll2.insertAtLast(6);
ll2.insertAtLast(6);
ll2.insertAtLast(30);

// console.log(ll1);
let inte = getNode(ll1.head, ll2.head);
console.log(getNode(ll1.head, ll2.head));
