const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  let stackList = document.querySelector('#stack-list');
  stackList.innerHTML = '';
};

const renderListStack = () => {
  clearStackInput();
  let stackList = document.querySelector('#stack-list')
  newStack.stackControl.forEach(element => {
    let newLi = document.createElement("li");
    newLi.innerHTML = element;
    stackList.append(newLi);
  })
};

renderListStack();

const generateWarningStack = type => {
  type = type.toLowerCase();
  if (type.includes('underflow')) {
    warningBottomStack.innerHTML = "Stack Underflow!"
    warningBottomStack.style.display = 'block';
  } else if (type.includes('overflow')) {
    warningTopStack.innerHTML = "Stack Overflow!"
    warningTopStack.style.display = 'block';  }
};

const addToStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  let input = document.querySelector('#stack-input').value;
  let result = newStack.push(input);
  if (typeof result === 'string') {generateWarningStack(result)}
  renderListStack();
};

const removeFromStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  let result = newStack.pop();
  if (typeof result === 'string') {generateWarningStack(result)}
  renderListStack();
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
