# Fetching 사전 과제



**작성자**: 김형석 [[altmshkfgudtjr@naver.com](mailto:altmshfkgudtjr@naver.com)]

**소속**: 세종대학교 학부생

---





## 기술 스택

명시사항 그대로 `React`, `Redux`, `Styled-components` 를 사용하였습니다. 

여기에 추가적으로 `react-swipeable-bottom-sheet` 라는 패키지를 추가적으로 사용하였습니다.

빠르게 개발하기 위해서 `CRA` 를 통해 개발하였으며, `Redux` 에서 비동기처리를 위해서 `Redux-thunk` 미들웨어를 적용하였습니다.





## 개발 내용

다음 항목에서는 주어진 조건 이외의 개발 내용에 대해서 소개합니다.



#### 주어지 개발 조건

- 상품 목록 화면 개발
  - 카테고리 대분류 및 소분류 클릭 시 해당 상품 목록들로 렌더 되어야 합니다.
  - 브랜드 및 가격을 필터링해서 상품 리스트를 확인할 수 있습니다.
  - 상품 목록 페이지에서 상품 상세페이지(`/productDetail/:id`) 이동 후 이전 페이지(`/productList`)로 돌아왔을 때 설정한 필터 옵션 및 스크롤 위치가 유지되어야 합니다.

- 브랜드 전체 목록 화면 개발
  - 브랜드 전체 페이지에서 알파벳 클릭 시 해당 알파벳 브랜드 위치로 스크롤이 이동되어야 합니다.





#### 그 외의 개발 내용

- **반응형 및 UX 를 고려한 `Header`**

  - 스크롤 방향에 따라서 Header 노출 여부를 결정합니다.
    ![](https://user-images.githubusercontent.com/47492535/118244341-62e55900-b4da-11eb-928d-16fd3615da81.png)

- **`상품목록 페이지`와 같은경우 다음과 같은 현재 경로를 알려줍니다.**
  ![](https://user-images.githubusercontent.com/47492535/118245562-f1a6a580-b4db-11eb-9c13-89da16c60aee.png)

- **상품 목록 더 보기 버튼 애니메이션**

  - 상품 목록 제일 아래에는 다음과 같은 버튼이 존재합니다.
    ![](https://user-images.githubusercontent.com/47492535/118244639-bb1c5b00-b4da-11eb-9d8a-c8779d56ada1.png)
  - 깜빡이면서 클릭이 차단되며, 애니메이션이 진행됩니다.
    ![](https://user-images.githubusercontent.com/47492535/118244663-c1aad280-b4da-11eb-931f-a312df370ab1.png)

- **`브랜드` 페이지에서 알파벳 리스트 상단 고정**

  - 특정 브랜드 초성에 바로 접근하기 위해서 알파벳은 항상 상단에 고정됩니다.
    ![](https://user-images.githubusercontent.com/47492535/118245003-30882b80-b4db-11eb-9943-e4b279651753.png)

  

  - 또한, `횡스크롤`이 어려운 데스크탑 경우에는 다음과 같이 알파벳이 전부 노출되어 클릭하기 쉽게 제작되었습니다.
    <img src="https://user-images.githubusercontent.com/47492535/118245155-66c5ab00-b4db-11eb-96ec-27308899b678.png" style="zoom:67%;" />





#### 그 외의 환경 세팅

- 실제 배포환경에 맞게 정적 자원들을 세팅하였습니다. (일부 자원은 `Fetching` 사이트에서 조달하였습니다.)
  - favicons, ogImage, 그 외의 manifest 자원 등..

- 폰트를 빠르게 로딩하기 위해서 구글 폰트를 사용하였습니다.

  ```css
  @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200;400;500;600;900&display=fallback);	
  ```

  

