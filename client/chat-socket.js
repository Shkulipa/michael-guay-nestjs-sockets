const socket = io('http://localhost:8080', { transports: ['websocket'] });

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMsg = () => {
  socket.emit('message', { data: message.value });
}

socket.on('message', ({data}) => {
  handleNewMsg(data);
})

const handleNewMsg = msg => {
  message.value = '';
  messages.appendChild(buildNewMessgae(msg));
}

const buildNewMessgae = msg => {
  const li = document.createElement('li');
  li.innerText = msg;
  return li;
}