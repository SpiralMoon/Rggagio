var chatList = document.getElementById("chatList");
var chatField = document.getElementById("chatField");

function onReceivedChat (id, nickname, message) {
    // TODO 조건문 데이터 수정
    if (id == "")//내가 보낸 채팅일 경우
        chatList.innerHTML += '<p class="chat" align="right">' + nickname + ':' + message + '</p>';
    else//상대가 보낸 채팅일 경우
        chatList.innerHTML += '<p class="chat" align="left">' + nickname + ':' + message + '</p>';
}

function onSendChat (id, nickname, message) {
    // 자신의 채팅 내용을 서버로 전송
    var chatData = { //TODO 데이터 수정
        id : id,
        nickname : nickname,
        message : message
    }
    socket.send(chatData);
    chatField.value = "";
}