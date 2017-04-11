var defaultTime = 20; //기본 제한시간은 한 턴 당 20초
var currentTime = 0;
var timerId = 0;

function runTimer() {
    currentTime = defaultTime;
    timerId = setInterval("timeCount()", 1000);
}

function timeCount() {
    if (currentTime != 0)
        currentTime--;
    else { //시간 경과
        //TODO 라이프 1 감소, 기물 랜덤 움직임
        clearTimeout(timerId);
    }

    console.log(currentTime);
}