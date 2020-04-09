class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  display() {
    return;
  }

  isEmpty() {
    return this.stackControl.length === 0;
  }

  push(item) {
    if (!this.canPush()) { return 'Stack Overflow' ;}
    this.stackControl.push(item);
    return this.stackControl;
  }

  pop() {
    if (this.isEmpty()) { return 'Stack Underflow' ;}
    this.stackControl.pop();
  }
}
