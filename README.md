# Footballer
크롤링을 이용한 데이터 수집 및 가공

<br/>

# 1. 프로젝트 목표
 - selinium을 이용해 축구 매칭 정보를 긁어 온다
 - 매칭 정보를 가공하여 자동화 메시지를 보낸다
 
<br/>

# 2. 아키텍처
![image](https://github.com/user-attachments/assets/72ae83f0-e2f9-4c1a-9995-d704e234763c)


<br/>

# 3. 구현
1. 스크롤 기능을 구현
   - jsoup 은 동적크롤링이 어려움으로 selinium을 사용
2. 스크롤 데이터 가공 및 출력
3. sms 발송 

<br/>

# 4. 프로젝트 중단 사유 
네이버 정책에 따라 데이터 수집을 위해서는 로그인이 필수. 
하지만 파이썬이(library) 아닌 자바-Selenium을 사용해서는 리캡챠를 우회할 수 없다. 


