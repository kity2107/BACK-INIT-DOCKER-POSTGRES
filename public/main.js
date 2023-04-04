/* eslint-disable no-undef */
var socket = io.connect('http://localhost:3000', { forceNew: true });

var chat = '';

socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

function render(data) {
    chat = `<p>${chat}<br> ${data}</p>`;

    document.getElementById('messages').innerHTML = chat;
}
