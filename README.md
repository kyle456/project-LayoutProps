## 2020-2학기 모바일 프로그래밍 📱
> 실습 당시 부계정인 kyle-kim2123으로 작업하였기 때문에 commit author가 다르게 되어 있습니다.

<br>

## 각 주차 수업내용 📋
**React Native와 Expo 기초 실습**  

1주차: 오리엔테이션 및 설문조사 (09.02)  
2주차: Expo 설치, VScode 연동, Android Emulator 연동 (09.09)  
3주차: github 가입, git 기본 문법, 메모장 올리기 (09.16)  
4주차: app.js 수정, button 생성, view와 button에 style 적용(09.23)  
5주차: 추석연휴로 인한 휴강 (09.30)  
6주차: import, view, text, image 학습, git branch 해보기 (10.07)  
7주차: 각 button 동적으로 적용해보기, 함수 작성 (10.14)  
8주차: 중간고사 기간으로 인한 휴강 (10.21)  
9주차: 배열과 함수의 개념, setSquares() 메소드 작성 (10.28)  
10주차: stack navigator를 이용한 home, layout 화면 전환 (11.04)  
11주차: tab navigator 사용, 날씨API 개요, key 보안 중요성 (11.11)  
12주차: Styles 요소 or 임의 국가 모바일 시장 중 택1 발표 (11.18)  
13주차: openweather API 연동(babel, axios, dotenv 이용) (11.25)  
14주차: 현재 날씨 정보에 따른 아이콘과 스타일 표시 (12.02)  

<br>

## Open API 🔗
**Weather API**  
[OpenWeatherAPI](https://openweathermap.org/api) 사용  
현재 LayoutProps 디렉토리에 .env 파일이 gitignore 처리 되었기 때문에 별도 생성 필요하다.  
.env 파일에는 `REACT_APP_WEATHER_KEY="API key"` 를 작성하고 저장해야한다.  
API key는 OpenWeatherAPI에서 받아야한다.  

**Map API**  
[GoogleMapsAPI](https://cloud.google.com/maps-platform/) 사용  
GoogleMapsAPI의 API key는 app.json에 입력되었는데, json 파일에서는 api key를 어떻게 숨기는지 몰라서 처리를 못했다.

<br>

## 실습 화면 💻
<div>
<img width="200" src="https://user-images.githubusercontent.com/71359300/100849849-53db9300-34c6-11eb-8924-27aaf6cbdd72.jpg">  
<img width="175" src="https://user-images.githubusercontent.com/71359300/100850122-b6349380-34c6-11eb-8e73-c8328f6d0a67.jpg">
<img width="185" src="https://user-images.githubusercontent.com/71359300/100850138-c187bf00-34c6-11eb-8cfb-9e564a924200.jpg">
</div>

         Main Screen               Layout Screen            Quiz Screen  

<div>
<img width="200" src="https://user-images.githubusercontent.com/71359300/100850342-090e4b00-34c7-11eb-9328-a9b10ebec820.jpg">
<img width="200" src="https://user-images.githubusercontent.com/71359300/100850382-13c8e000-34c7-11eb-946d-35e62713639a.jpg">
<img width="170" src="https://user-images.githubusercontent.com/71359300/100850417-1f1c0b80-34c7-11eb-93cc-3ca2e3ce1a21.jpg">
</div>

        Correct Screen              Wrong Screen             Weather Screen  
