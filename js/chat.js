var chatList = document.getElementById("chatList");
var chatField = document.getElementById("chatField");

function onReceivedChat (id, message) {
    // TODO
    if (chatList == "my id")//내가 보낸 채팅일 경우
        chatList.innerHTML += '<p align="right">' + id + ':' + message + '</p>';
    else//상대가 보낸 채팅일 경우
        chatList.innerHTML += '<p align="left">' + id + ':' + message + '</p>';
}

function onSendChat (id, message) {
    // TODO
    // 자신의 채팅 내용을 서버로 전송
    // socket.send();
    chatField.value = "";
}