const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  let queueList = document.querySelector('#queue-list');
  queueList.innerHTML = '';
};

const generateListQueue = () => {
  clearQueueInput();
  let queueList = document.querySelector('#queue-list');
  queue.queueControl.forEach(element => {
    let newLi = document.createElement("li");
    newLi.innerHTML = element;
    queueList.append(newLi);
  });
};

generateListQueue();

const generateWarningQueue = type => {
  type = type.toLowerCase();
  if (type.includes('underflow')) {
    warningBottomQueue.innerHTML = "Queue Underflow!";
    warningBottomQueue.style.display = 'block';
  } else if (type.includes('overflow')) {
    warningTopQueue.innerHTML = "Queue Overflow!";
    warningTopQueue.style.display = 'block';  
  }
};
const addToQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  let input = document.querySelector('#queue-input').value;
  let result = queue.enqueue(input);
  if (typeof result === 'string') {generateWarningQueue(result);}
  generateListQueue();
};

const removeFromQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  let result = queue.dequeue();
  if (typeof result === 'string') {generateWarningQueue(result);}
  generateListQueue();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
