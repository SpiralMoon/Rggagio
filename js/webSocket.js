var socket = new WebSocket("ws://도메인");

function send(string) {
    socket.send(JSON.stringify(string)); //마샬링 후 데이터 전송
}

socket.onerror = function (event) {
    console.log("socket error occur.");
}

socket.onopen = function (evnet) {
    console.log("socket connected.");
}

socket.onclose = function (event) {
    console.log("socket closed.");
}