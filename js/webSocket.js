var socket = new WebSocket("ws://도메인");

function send(string) {
    socket.send(JSON.stringify(string)); //마샬링 후 데이터 전송
}

socket.onmessage = function (event) {
    var json = JSON.parse(event);

    //채팅
    if (json.event == "chat")
        onReceivedChat(json.id, json.nickname, json.message);
    //게임 초기화
    else if (json.event == "initialize") {
        var piece_info = json.piece_info;

        for (var i = 0; i < piece_info.length(); i++)
            console.log(piece_info[i]); //TODO
        //기물의정보를 json 배열로 받아와 index.js 스크립트에 적용한다.

        var blind = document.getElementById("blind");
        blind.parentNode.removeChild(blind);
    }
    //게임 진행
    else if (json.event == "relay") {
        //TODO 기물 움직임
    }
    //게임 종료
    else if (json.event == "end") {
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