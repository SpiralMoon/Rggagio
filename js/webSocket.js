var socket = new WebSocket("ws://도메인");

function send(string) {
    socket.send(JSON.stringify(string)); //마샬링 후 데이터 전송
}

socket.onmessage = function (event) {
    var json = JSON.parse(event);

    //if (채팅인 경우)
    onReceivedChat(json.id, json.nickname, json.message);
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