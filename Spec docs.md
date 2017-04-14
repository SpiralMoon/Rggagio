# 알까기오 Rggagio
# 통신 스펙
 * Rggagio의 통신은 websocket을 이용하여 json을 주고받는 형태로 작성한다.
## 방 만들기
 * Client to Server : { "event" : "create" , "nickname" : string, "title" : string  }
 * Server to Client : { "success" : bool, "id" : string }
## 방 입장하기
 * Client to Server : { "event" : "join_invite", "nickname" : string, "invite_code" : string } //초대코드를 통한 입장
 * Client to Server : { "event" : "join_random", "nickname" : string }
 * Server to Client : { "success" : bool, "id" : string }
## 채팅
 * Client to Server : { "event" : "chat", "id" : string, "nickname" : string, "message" : string }
 * Server to Client : { "event" : "chat", "id" : string, "nickname" : string, "message" : string }