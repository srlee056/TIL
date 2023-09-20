# SQL공부 1H

Date: 2023년 9월 20일 오후 10:00 → 오후 11:00
요일: 수요일
태그: SQL
완료: Yes

SELECT 열_이름
FROM 테이블_이름
WHERE 조건식
GROUP BY 열_이름
HAVING 조건식
ORDER BY 열_이름
LIMIT 숫자

1. SELECT
    1. 다중 정렬 문제
        
        ```sql
        SELECT FLAVOR FROM FIRST_HALF
        	ORDER BY TOTAL_ORDER desc, SHIPMENT_ID asc;
        -- 두가지 정렬 조건이 있을 땐 더 상위 조건을 먼저 쓰고 **,** 로 연결하면 됨
        ```
        
    2. 다중 테이블, 조건식 문제
        
        ```sql
        SELECT FIRST_HALF.FLAVOR FROM FIRST_HALF, ICECREAM_INFO
            WHERE FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR
                AND ICECREAM_INFO.INGREDIENT_TYPE = 'fruit_based'
                AND FIRST_HALF.TOTAL_ORDER > 3000
            ORDER BY TOTAL_ORDER desc;
        ```
        
    3. 특정 문자열 포함 조건식
        
        ```sql
        SELECT FACTORY_ID,FACTORY_NAME,ADDRESS FROM FOOD_FACTORY
            WHERE ADDRESS LIKE CONCAT('%', '강원도', '%')
        --  WHERE ADDRESS LIKE '%강원도%' 
            ORDER BY FACTORY_ID asc;
        ```
        
    4. group by
        
        ```sql
        SELECT I.REST_ID, I.REST_NAME, I.FOOD_TYPE, I.FAVORITES, I.ADDRESS, 
        ROUND(AVG(R.REVIEW_SCORE), 2) as SCORE FROM REST_INFO I, REST_REVIEW R
            WHERE I.REST_ID = R.REST_ID
                AND I.ADDRESS LIKE '서울%'
            GROUP BY R.REST_ID
            ORDER BY SCORE desc, I.FAVORITES desc;
        ```
        
         
        
    5. DATE format
        
        ```sql
        SELECT B.TITLE, B.BOARD_ID, R.REPLY_ID, R.WRITER_ID, R.CONTENTS, 
        date_format(R.CREATED_DATE, '%Y-%m-%d') as CREATED_DATE
            FROM USED_GOODS_BOARD B, USED_GOODS_REPLY R
            WHERE B.BOARD_ID = R.BOARD_ID
                AND B.CREATED_DATE BETWEEN '2022-10-01' AND '2022-10-31'
            ORDER BY R.CREATED_DATE asc, B.TITLE asc;
        ```