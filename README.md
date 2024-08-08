# 여행을 더 쉽게, “가보자고”

<div style="width:300px">

![가보자고 로고](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fae19eeb1-29a2-4078-876b-f9946a63a062%2F%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258F%25E1%2585%25A9%25E1%2586%25AB.png?table=block&id=69c4722a-d984-4756-8eb2-f5a9b5aab8a6&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)
</div>

## 💡프로젝트 소개

> 지도기반 여행 일정 관리 및 아티클 제공하는 여행 플랫폼 서비스
> - GitHub: https://github.com/yeodahui/gabozago_FE
> - 서비스 Link: https://www.gabozago.kr (현재 테스트 중으로 이용이 원활하지 않습니다. [DEMO](#demo)를 참고해주세요.)
    


**🏆 `2024.03.20.` 2024년 꿈터 플러스 제 1회 대학생 창업 아이디어 경진대회** 최우수상

**🏆 `2024.02.16.` 부산권 LINC 3.0 창업공유대학 IR 피칭 경진대회** 우수/인기상

### 주요 기능
- 여행/미식 관련 아티클 및 숏폼 보기
- 여행 일정 생성 및 관리하기
- 지도에서 행선지 확인 및 편집하기
- 컨텐츠 스크랩
- ...


### 팀원

<table>
<thead>
<th>Front-End</th>
<th>Front-End</th>
<th>Back-End</th>
</thead>
<tr>
<td>

[김종진](https://github.com/SugarSyrup)

</td>
<td>

[여다희](https://github.com/yeodahui)

</td>
<td>

[조다은](https://github.com/chodakk)

</td>
</tr>
</table>

## 개발 환경 & 기술 스택

- 개발 환경
  - 개발 언어: `TypeScript`
  - 패키지 매니저: `npm`
  - 린팅 & 포맷팅: `ESLint`, `Prettier`
  - 부트스트랩: `vite`
- 클라이언트
  - UI: `react v18`
  - 상태관리: `recoil`
  - 스타일링: `styled-components`
- 백엔드
  - API 서버: `Python + Django`
- 인프라
  - 데이터베이스: `MongoDB Atlas`
  - 프론트엔드 배포: `AWS EC2`

### 디렉토리 구조

```txt
(root)
├── ...
├── public
│   └── icons # static하게 사용되는 이미지
├── src
│   ├── assets
│   │   ├── data # 더미 데이터
│   │   ├── icons # 아이콘 svg
│   │   ├── imgs # 이미지
│   │   └── types # Typescript 타입 정의
│   ├── components # 재사용 가능하거나 로직이 복잡한 컴포넌트
│   ├── hooks # Custom Hooks
│   ├── pages # 라우팅 단위가 되는 페이지 컴포넌트
│   ├── recoil # recoil 전역 상태
│   ├── styles # 전역으로 사용되는 스타일
│   └── utiles # 유틸리티 함수
└── ...
```

## 실행 or 기여하기

> 원활한 실행을 위해서는 환경변수 파일(.env)이 필요합니다. 개발자에게 .env 파일을 요청하세요.

### Repository 로컬에 복제하기

먼저 Repository를 fork한 뒤, 로컬에 clone합니다. 이후 패키지를 다운로드합니다. (패키지매니저 npm이 필요합니다.)

```bash
git clone https://github.com/{유저 ID}/gabozago_FE.git
npm install
```

패키지 설치가 완료되면 다음 명령어로 서버를 실행합니다:

```bash
npm run dev
```

이후 브라우저에서 [http://localhost:3000](http://localhost:3000)를 엽니다.


## DEMO

### 홈 페이지

<table>
<tr>
<th width="50%">홈 - 아티클 탭</th>
<th width="50%">홈 - 숏폼 탭</th></tr>
<tr>
<td width="50%">

![홈 - 아티클 탭](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F23617b14-b063-4bf3-b316-6e66e20c452f%2FUntitled.png?table=block&id=580ad604-6da5-4eef-9d1c-12defda8b4cf&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![홈 - 숏폼 탭](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F2c663f6c-c1dd-4fdb-a4fe-8c2301c26e62%2FUntitled.png?table=block&id=22af319e-95e9-4463-b8e4-671d1b925bcf&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 아티클 페이지
<table>
<tr>
<th width="50%">아티클 페이지</th>
</tr>
<tr>
<td width="50%">

![아티클 페이지](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F5109b6db-fac7-4993-93c2-48244f89af0e%2FUntitled.png?table=block&id=fc9ad424-8176-4ffc-af25-fb1080854006&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

<td width="50%">
</tr>
</table>

### 숏폼 페이지

<table>
<tr>
<th width="50%">숏폼 페이지</th>
<th width="50%">숏폼 페이지 - 캡션 열기</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F6d1d442d-f732-42e9-a142-51aceac7a63f%2FUntitled.png?table=block&id=ce706668-681a-4a4e-a269-de6bbe6afc82&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Ffd3a9974-89e3-48b3-bf9d-a71f52fe6433%2FUntitled.png?table=block&id=f96b955c-9708-40cd-8722-2f468bbe4f0e&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>

<tr>
<th width="50%">숏폼 페이지 - 댓글 열기</th>
<th width="50%">숏폼 페이지 - 스크랩</th>
</tr>
<tr>
<td width="50%">


![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F91b924d1-e55a-4a3b-82f6-24c30bcf9fcf%2FUntitled.png?table=block&id=c7c55126-d059-4b96-a29e-9524234e813d&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">


![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fd19c22e6-1245-48a4-9bea-77d200d1d66e%2FUntitled.png?table=block&id=d9984fc7-2773-4d3c-934a-5adc7a6aa3e9&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<tr>
<th width="50%">숏폼 페이지 - 태그된 장소</th>
<th width="50%">숏폼 페이지 - 태그된 장소 내 여행에 추가</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F4e3e5a77-6825-48c3-91a6-f1363a919e0b%2FUntitled.png?table=block&id=4a418790-f266-4b5e-828c-fb07f808fb28&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fba81961c-824a-48a9-bb8f-a3490c539858%2FUntitled.png?table=block&id=b9f22d5f-51d7-4a0b-acdc-9fbc728b7803&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 내 여행 페이지

<table>
<tr>
<th width="50%">내 여행 페이지 - 홈(여행 없음)</th>
<th width="50%">내 여행 페이지 - 여행 계획 생성 - 날짜선택</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F1ce610e1-87c6-4ded-8224-aafa7a554bca%2FUntitled.png?table=block&id=3fb31385-c185-40d2-be5a-9a8901fd2bc9&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fd35acf87-47f5-43e9-bbfd-b2a4c5ba92c1%2FUntitled.png?table=block&id=117a99b8-15eb-4f60-b9d3-f9881914bacb&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">내 여행 페이지 - 여행 계획 생성 - 지역 선택</th>
<th width="50%">내 여행 페이지 - 여행 계획 생성 - 장소 선택</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F06d2bead-6032-4ecd-81bd-6b813ed2fa27%2FUntitled.png?table=block&id=258f4654-4cb4-4bb7-936f-1ba154e3c0f9&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fede06b09-7581-4848-a6a6-d06396044306%2FUntitled.png?table=block&id=ca95f8ca-8323-4339-b6be-d7c07e7d9b17&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 스크랩 페이지

<table>
<tr>
<th width="50%">스크랩 페이지 - 콘텐츠 탭</th>
<th width="50%">스크랩 페이지 - 콘텐츠 탭</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F96fa74a9-e9a5-4cbe-b786-c94a05d66ca0%2FUntitled.png?table=block&id=f65ba1bd-cfbe-48bd-a27b-0a1f731221b7&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F71fe97ad-db33-463f-9237-37d1c9906d70%2FUntitled.png?table=block&id=aba3aedb-ed3a-4c71-a732-2fefaac0a087&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">스크랩 페이지 - 콘텐츠 탭 폴더 내부</th>
<th width="50%">스크랩 페이지 - 콘텐츠 탭 폴더 내부</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F9c600433-7455-4913-b332-2cf44f9e6e79%2FUntitled.png?table=block&id=9c40074c-26a1-4723-ad4f-2704abee87e2&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F6632215c-098e-427b-9956-f14d7b100240%2FUntitled.png?table=block&id=658abf8d-998d-4cd1-973f-b8a29e887302&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">스크랩 페이지 - 여행장소 탭</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fcbb9b165-efc7-4a38-a32c-ec42a1132ee7%2FUntitled.png?table=block&id=f6a3d1e3-c15a-4da0-a3fb-157e479db7e7&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 장소 페이지

<table width="50%">
<tr>
<th width="50%">장소 페이지</th>
</tr>
<tr>
<td width="50%">

![장소 페이지](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F4d77a063-9a2d-43e1-b481-c798099c6fe4%2FUntitled.png?table=block&id=4a665459-78c0-474d-8fed-fa7f384ba743&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 마이 페이지

<table>
<tr>
<th width="50%">마이 페이지 - 나의 여행 탭</th>
<th width="50%">마이 페이지 - 나의 활동 탭</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fc5b01569-6127-4466-aef1-23db574953f0%2FUntitled.png?table=block&id=34500ee8-3f15-4066-99ab-7f2f5830ab56&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Febb93c7b-196f-4983-93bc-012cccb1f5f8%2FUntitled.png?table=block&id=1f888602-0314-4204-918d-10bec89ca4dd&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 에러 페이지

<table width="50%">
<tr>
<th width="50%">에러 페이지</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F172ff695-7c44-499c-af12-196be42ecbd9%2FUntitled.png?table=block&id=089dfe46-a931-49ae-934a-9721e343f6a3&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>

### 설정 페이지

<table>
<tr>
<th width="50%">설정 페이지</th>
<th width="50%">이용약관</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F75505e1d-17dd-4455-a867-624d3c5a7286%2FUntitled.png?table=block&id=9765ddfb-2e92-4cdf-9f7e-c637fe46dda8&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F5f380078-2f57-4336-8cf8-71ba6ab62603%2FUntitled.png?table=block&id=02638483-7f47-491e-9095-942785ad86ca&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">고객지원 - 공지사항</th>
<th width="50%">고객지원 - 공지사항 상세</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2Fe23b10bf-a04a-4851-8619-bfc944b01f8a%2FUntitled.png?table=block&id=0e086713-7adb-43a4-9c47-97bbb3885eca&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F4556b8bf-8499-47c9-bc4c-9f28f28e8f49%2FUntitled.png?table=block&id=aeefeee1-ca0d-40d0-a8c3-9e395120441b&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">고객지원 - 도움말</th>
<th width="50%">고객지원 - 서비스 문의하기</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F705c086e-edd0-466e-8a8c-aec561b18f28%2FUntitled.png?table=block&id=b0644c75-5d53-482b-9c89-a56c7a65474b&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F9840e4b3-79dd-4bbf-8dc1-38c218475f08%2FUntitled.png?table=block&id=5c8d350c-15b9-4327-955f-654dba8ca815&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">고객지원 - 내 문의 내역</th>
<th width="50%">의견 보내기</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F7b251992-9d70-43c7-9978-c238404e32ff%2FUntitled.png?table=block&id=89fd071c-a428-44d7-8e8f-e60acfb260bb&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F8063e6d7-07d8-46a9-a774-f2ae6ed506b9%2FUntitled.png?table=block&id=99ad78c5-1ad6-49d9-b090-da22ddca15bf&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
<tr>
<th width="50%">탈퇴하기</th>
<th width="50%">탈퇴하기 - 완료</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F31d1c3aa-7515-41ab-b79f-dea0bb6239ca%2FUntitled.png?table=block&id=cd44f0b8-af8f-4fb8-96fb-d3a67985b08a&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F9023570b-9e92-4288-9539-696f033aaa1c%2FUntitled.png?table=block&id=6fcff53e-e420-4685-8a80-d80545bc869d&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>


### 프로필 수정 페이지

<table width="50%">
<tr>
<th width="50%">프로필 수정 페이지</th>
</tr>
<tr>
<td width="50%">

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3f1491e7-46b5-42fd-87ce-f24dfdb71617%2F56f7427d-89b3-4153-9c20-40293a5a2aa0%2FUntitled.png?table=block&id=e20bd941-d35e-47ea-9a57-df8ddd871874&spaceId=3f1491e7-46b5-42fd-87ce-f24dfdb71617&width=1440&userId=d4c95a7f-c7aa-4b3b-b9a5-fc3cd96b3c41&cache=v2)

</td>
</tr>
</table>