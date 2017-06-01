var socket = new WebSocket("ws://도메인");

function send(string) {
    socket.send(JSON.stringify(string)); //마샬링 후 데이터 전송
}

socket.onmessage = function (event) {
    var json = JSON.parse(event);

    //채팅
    if (json.messageType == "chat")
        onReceivedChat(json.id, json.nickname, json.message);
    //게임 초기화
    else if (json.messageType == 1) {
        //TODO

    }
    //게임 진행
    else if (json.messageType == "relay") {
        //TODO 기물 움직임
    }
    //게임 종료
    else if (json.messageType == "end") {
        if (json.win) {
            //TODO 승리 화면 출력
        }
        else {
            //TODO 패배 화면 출력
        }
    }

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