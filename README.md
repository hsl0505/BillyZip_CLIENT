![billyzip_logo](https://user-images.githubusercontent.com/53073832/75628461-83e6c480-5c1c-11ea-87c4-1d2832142b27.png)

# Billy Zip

**Billy Zip**은 새로운 개념의 구독형 주거 서비스 제공하는 모바일 어플리케이션 프로젝트 입니다. 

이사할 때마다 **전세? 월세? 보증금? 계약은 어떻게...?** 부동산 매물마다 너무 복잡하지 않으신가요? **🤬**

**Billy Zip**을 이용하면 부동산 또는 집주인과의 번거롭고, 복잡한 계약 관계없이 살고 싶은 곳이 있으면 예약 후 마음 편히 거주할 수 있습니다. **🥰**

</br>


### 프로젝트 개요

**프로젝트 기간**  :  2020.01.31 ~ 2020.02.25

**서비스 종류** : Mobile Application

**프로젝트 참여 인원** : Front-End 1명 / Full-Stack 2명

- *조성철*  (팀장, Full-Stack)
  - Front : 검색 기능 구현, 포럼 구현
    - 유저에게 보다 적합한 부동산 매물 제공하기 위해 퀵 서치 & 맵 서치 컴포넌트 구현
    - 필요한 요건의 매물을 찾을 수 있도록 필터링 컴포넌트 구현
  - Back
    - Typescript & Express로 @REST API를 활용하여 하우스, 리뷰, 유저정보의 CRUD 기능 구현
    - JWT 토큰 인증 과정을 Express Middleware로 하는 인증체계 구축
    - Twilio Programmable SMS API를 이용한 인증번호 문자 전송 및 인증 확인 모듈 구축
    - Socket.io를 이용해 유저 to 호스트, 유저 to 유저간 의사소통이 가능한 실시간 채팅 기능 구현
    - TypeORM의 Active Record 방식을 통한 DB 제어와 자체 알고리즘을 이용해 하우스 검색 기능 구현
  - 배포
    - Server : AWS EC2
    - DB : AWS RDS
    </br>
- *김보미*  (팀원, Full-Stack)
  - 회원 서버 API 작성, 회원 정보 화면 구현
    - 회원가입 / 로그인 / 로그 아웃 / 탈퇴 서버API 연결
    - 회원 정보 수정(비밀번호 / 휴대폰 번호 변경)  서버 API 연결 및 화면 구현
    - 현재 구독 모델 / 살고 있는 집 서버 API 연결 및 화면 구현
    - 결제 서버 API 연결 및 화면 구성
    </br>
- *임현성*  (팀원, Front-End)
  - 전반적인 클라이언트 구조 및 기능 구현, 전체 디자인 구현
    - 전체 네비게이션 설계 및 구현
    - 클라이언트 전반적인 UI/UX 구현
    - 로그인 / 회원가입 / 로그아웃 기능 구현
    - 홈 화면(추천매물 / 매물 종류별) / 매물 종류별 리스트 화면 구현
    - 즐겨찾기 토글 기능 구현 및 즐겨찾기 화면 구현
    - Hosting CRUD 기능 구현 (호스팅 작성 / 호스팅 상세 화면 / 호스팅 수정 / 삭제)
    - 내 호스팅 관리 화면 구현
    - 구독 신청 수락/거절 기능 및 구독 신청 현황 화면 구현
    - 리뷰 화면 및 리뷰 등록/삭제 기능 구현 (별점 평가 및 코멘트 기능)
</br>

**Billy Zip 주요 기능**

- 핸드폰 인증 기반 회원가입 / 로그인 / 로그아웃 / 개인정보 수정 / 회원탈퇴
- 매물 등록/수정/삭제/상세 정보 열람
- 매물 즐겨찾기 등록 / 삭제
- 매물 리뷰 (평점 평가 및 코멘트) 등록 및 삭제
- 구독 신청 및 신청 수락 / 거절
- 매물 검색 / 상세 검색 / 지도 검색
- 포럼을 통한 의견 공유
- 개발 테스트용 결제 기능 구축


</br>


### 프로젝트 관리

- Notion을 이용하여 프로젝트 전반적인 기획 및 관리

  - team rule, step, task, api 문서 등

- Miro를 이용하여 프로젝트 전체 레이아웃 설계

- dbdiagram.io를 이용하여 데이터베이스 설계

- 애자일 스크럼 방식을 이용하여 스프린트 단위의 개발 진행관리

- ESLint, Prettier를 이용하여 코드 스타일 통일


</br>


### 사용한 기술 스택

**Common**

- TypeScript
- Node.js
- Soket.io

**Front-End**

- React Native (EXPO)
- React Hooks
- React Navigation
- React Native Elements
- Axios
- Google maps API

**Back-End**

- Express
- TypeORM
- JWT
- Twilio
- Multer
- MySQL

**Development Tool**

- Git
- AWS (S3, EC2, RDS)


</br>


### 프로젝트 아키텍쳐

![아키텍쳐](https://user-images.githubusercontent.com/53073832/75628466-906b1d00-5c1c-11ea-95e3-289f30a4a9b6.png)

</br>



### Billy Zip 시연 영상

[![이미지 텍스트](https://img.youtube.com/vi/r7AFMYzc3Tc/0.jpg)](https://youtu.be/r7AFMYzc3Tc?t=0s)

</br>
</br>

# Front-End

### Directory Structure
```
Biily-Zip client
├── App.js
├── README.md
├── app.json
├── assets
├── babel.config.js
├── package.json
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Forum
│   │   ├── HouseDetail
│   │   ├── Login
│   │   ├── MainScreen
│   │   │   ├── HouseLIstEntry
│   │   ├── Reviews
│   │   ├── Search
│   │   ├── SignUp
│   │   └── UserInfo
│   │       ├── CurrentModel
│   │       ├── Hosting
│   │       ├── MyInfo
│   │       ├── Payment
│   ├── screens
│   │   ├── AuthValid
│   │   ├── Favor
│   │   ├── Forum
│   │   ├── HouseDetail
│   │   ├── LoginScreen
│   │   ├── MainScreen
│   │   ├── Search
│   │   ├── SignUp
│   │   └── UserInfo
│   │       ├── Application
│   │       ├── CurrentHouse
│   │       ├── Hosting
│   │       ├── MyInfo
│   │       ├── Payment
│   └── util
└── tsconfig.json
```
</br>

### Features
---
**# 앱 구동시 Splash Image 및 로그인 화면 / 자동 로그인**

<img src="https://user-images.githubusercontent.com/53073832/75661884-7a5b6c00-5cb1-11ea-9c75-74d0a3c3b280.gif" height="400" width="200" >  <img src="https://user-images.githubusercontent.com/53073832/75774643-ba931b00-5d93-11ea-9da3-46fd27d54401.gif" height="400" width="200" >

- Animated.view 를 이용하여 초기 렌더링 시 Opacity Transition
- AsyncStorage, JWT, Switch navigator를 이용한 자동 로그인


</br>

**# 로그인 및 로그아웃 / 회원가입 / 회원탈퇴**

[![이미지 텍스트](https://img.youtube.com/vi/UshMfslr0l4/0.jpg)](https://youtu.be/UshMfslr0l4?t=0s)

- Switch navigator를 통해 로그인 시 Home화면으로 이동
- 로그아웃 시 AsyncStorage clear
- 회원가입 시 Twilio를 통한 핸드폰 인증

</br>

**# 홈 화면 및 매물 별 리스트 / 각 탭 화면**

[![이미지 텍스트](https://img.youtube.com/vi/RxhAj-e6898/0.jpg)](https://youtu.be/RxhAj-e6898?t=0s)

- 홈 화면 (추천 매물 / 매물 종류별)
- More 버튼 클릭 시 각 매물 종류별 전체 리스트
- Navigation life cycle (didFocus)를 이용하여 홈 화면 포커싱 시마다 최신 데이터 요청 및 렌더링
- Bottom Tab navigator를 통한 주요 기능 별 화면으로 이동

</br>

**# 매물 상세 화면**

[![이미지 텍스트](https://img.youtube.com/vi/nMNF0vnEutg/0.jpg)](https://youtu.be/nMNF0vnEutg?t=0s)

- Carousel과 Pagination 활용으로 매물의 여러 이미지 보여주기

</br>

**# 즐겨찾기 등록 및 삭제**

[![이미지 텍스트](https://img.youtube.com/vi/7EdqItCA4ms/0.jpg)](https://youtu.be/7EdqItCA4ms?t=0s)

- 매물 즐겨찾기 등록 및 삭제
- Navigation life cycle (didFocus)를 이용하여 즐겨찾기 화면 포커싱 시마다 최신 데이터 요청 및 렌더링

</br>

**# 리뷰 등록 및 삭제**

[![이미지 텍스트](https://img.youtube.com/vi/IFiedvEzWs0/0.jpg)](https://youtu.be/IFiedvEzWs0?t=0s)

- 매물 리뷰 등록 (별점 평가 및 코멘트) 및 삭제

</br>

**# 매물 등록 및 관리 (수정/삭제)**

[![이미지 텍스트](https://img.youtube.com/vi/EGergSm0VDA/0.jpg)](https://youtu.be/EGergSm0VDA?t=0s)

- EXPO Permission을 이용한 위치 권한 및 디바이스 내 카메라/앨범 접근 권한 설정
- EXPO Image Picker를 이용한 디바이스 내 앨범 및 카메라 사진으로 이미지 업로드 기능
- EXPO Location을 이용한 주소 좌표 받아오기
- 대표이미지 설정을 통해 매물 리스트에서 보여질 이미지 지정 가능
- Carousel과 Pagination 활용으로 매물의 여러 이미지 보기 
- 호스팅 관리 화면에서 매물 정보 수정 및 삭제 가능

</br>

**# 포럼을 통한 의견 공유**

[![이미지 텍스트](https://img.youtube.com/vi/qobvKBvOA64/0.jpg)](https://youtu.be/qobvKBvOA64?t=0s)

- Soket.io를 이용하여 실시간 포럼 기능을 통해 호스트 및 다른 사용자와 의견 공유

</br>

**# 매물 검색 (빠른검색 / 상세검색 / 지도검색)**

[![이미지 텍스트](https://img.youtube.com/vi/bUnFrCEqMHI/0.jpg)](https://youtu.be/bUnFrCEqMHI?t=0s)

- 검색 알고리즘 및 필터링을 이용하여 다양한 검색 기능 (이부분 성철님 수정부탁드려요)
- Google Maps를 이용하여 지도 검색

</br>

**# 현재 구독 플랜 / 살고있는 집 보기**

</br>

**# 내 정보 및 핸드폰 / 비밀번호 변경**

</br>

**# 구독 신청하기 / 신청 현황 / 구독 수락 및 거절**

</br>

**# 결제하기 (테스트 결제로 구현)**

</br>

