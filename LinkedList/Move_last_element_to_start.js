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

function moveLastToFirst(list) {
  let head = list.head;
  if (head == null || head.next == null) return;

  /* Initialize second last and last pointers */
  var secLast = null;
  var last = head;

  /*
   * After this loop secLast contains address of second last node and last
   * contains address of last node in Linked List
   */
  while (last.next != null) {
    secLast = last;
    last = last.next;
  }

  /* Set the next of second last as null */
  secLast.next = null;

  /* Set the next of last as head */
  last.next = head;

  /* Change head to point to last node. */
  head = last;
  list.head = head;
  return list;
}
let ll = new LinkedList();
ll.insertAtFirst(1);
ll.insertAtFirst(2);
ll.insertAtFirst(3);
ll.insertAtFirst(4);
ll.insertAtFirst(5);

let ll2 = moveLastToFirst(ll);
ll2.display();
