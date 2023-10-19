
이 글은 [Understand Hash Table](https://www.baeldung.com/cs/hash-tables)을 읽으며 이해한 내용을 제 방식대로 정리한 글입니다.   
원문과 차이가 있으며 틀린 부분도 있을 수 있으니 보이면 알려주세요 :>

( 자세한 내용은 같은 저자의 [Deep Dive into Hashing](https://www.baeldung.com/cs/hashing) 참고)
1. Hashing 
    - variable-length 입력값을 받아 fixed-length 출력값(=`hash(code)`)을 생성하는 과정.
    
    - hasing function : 위 일을 하는 함수. 표준 hash function은 존재하지 않으며, 데이터의 특성에 따라 개발할 수 있음
    - 비밀번호를 저장하고 검증하는 일(encode/decode), 메세지 서명 생성 등 기능을 함
    - Hash의 데이터 관리 구조

2. Hash Tables
    - 데이터를 저장하는 데 `연관 배열(associative array)`을 사용
        - 연결된 `key - value`
        - hash function을 사용해 데이터가 배열의 어떤 index에 저장될 지 계산
            - `Raw keys -> HASH FUNCTION -> Indexes`
        
        ![img](https://www.baeldung.com/wp-content/uploads/sites/4/2022/04/HashTable3.png)

    - 대부분의 언어가 라이브러리를 통해 제공
        - Java- HashMaps / Python - dict class / C++ - map class / ...
    
    - 시간 - 공간 자원이 서로 상충하는 관계에 있음 (trade off)
        - 무한한 시간 자원(Infinite Time) : 모든 key를 하나의 index와 연결하며, data를 찾기 위해 binary search 사용
        - 무한한 공간 자원(Infinite Space) : key = index, key마다 각각의 index와 데이터를 저장할 장소가 주어짐.

        현실은 Hash collisions, index sharing 등 발생하는 여러 문제점을 잘 다루면서 구현해야 함
    
    - Collisions in Hash Tables
        - 여러 길이를 가진 데이터를 정해진 길이로 대응 = 무한을 유한에 대응시키는 것   
        => 여러 다른 keys - 같은 index를 가지는 경우가 생기고 **충돌 발생**
        - 대응 방법
            - Separate Chaining : 링크드 리스트를 지원하여, 이미 데이터가 존재하는 저장공간에 배정되더라도 linked list에 추가되는 방식으로 충돌을 피함
            - Linear Probing : addressing이라고도 하며, 비어있는 저장공간(memory bucket)들 중에 제일 가까운 index를 찾아 배정하는 방식  
            - Resize and Copy: 충돌이 발생하는 경우 hash table을 resize하고 데이터를 재배정하는 방식. 발생한 충돌을 해결하지만 생길 수 있는 이후의 충돌은 무시(?)

3. Complexity 
    - 