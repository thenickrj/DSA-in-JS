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

  insertAtFirst(val) {
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

function intersect(list1, list2) {
  let list = new LinkedList();
  let head1 = list1.head;
  let head2 = list2.head;

  while (head1 && head2) {
    if (head1.val == head2.val) {
      list.insertAtFirst(head1.val);
      head2 = head2.next;
      head1 = head1.next;
    } else if (head1.val > head2.val) {
      head2 = head2.next;
    } else {
      head1 = head1.next;
    }
  }
  return list;
}
let l1 = new LinkedList();
let l2 = new LinkedList();

l1.insertAtFirst(5);
l1.insertAtFirst(4);
l1.insertAtFirst(3);
l1.insertAtFirst(2);
l1.insertAtFirst(1);

console.log("--------");
// l2.insertAtFirst(8);
// l2.insertAtFirst(6);
l2.insertAtFirst(4);
l2.insertAtFirst(3);
l2.insertAtFirst(2);

let l3 = intersect(l1, l2);
console.log(l3);
l3.display();
