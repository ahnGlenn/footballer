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

<br/>

# 4. 기록 & 에러 
프로젝트 중단 사유 : 네이버 정책상 데이터 수집을 위해서는 로그인이 필수임. 하지만, (자바-selinium)으로는 리캡챠를 패스할 수 없음. 따라서 Python으로 진행 필요해보임. 
