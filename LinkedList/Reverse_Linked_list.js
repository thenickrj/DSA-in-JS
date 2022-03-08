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

  displayReverse(){
      let rev=new LinkedList();
      let current=this.head;
      while (current) {
          new Node(current.val)
        revcurrent.val);
        current = current.next;
      }

  }
}

let ll1 = new LinkedList();
ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
ll1.insert(4);
ll1.display();
