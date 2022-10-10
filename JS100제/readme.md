# JS_100제 링크

https://paullabworkspace.notion.site/JS-100-1-8fa7b5cacf2242fc9d4abbf22080ab3f


### 앞으로 진행할 JS100제 풀이는 본인의 폴더에서 .js 파일을 만들어서 진행하면 됩니다.
### 단, 작업을 진행하기 전에 무조건 pull 한번 하고 진행하기
### push 할 때, 이슈에 등록된 번호와 본인이 푼 문제의 번호를 확인하여 커밋 메시지에 #이슈넘버 필히 작성!


## 1. 깃 레포지토리 클론 안내
![image](https://user-images.githubusercontent.com/89332480/194902944-2c26c9e1-8360-482f-bb07-1bb71127c51a.png)

깃 레포지토리 주소를 복사하고, 바탕화면에 빈 폴더를 만듭니다.

폴더를 열고, 오른쪽 마우스 클릭, git bash here 누르고, 아래와 같이 입력!
![image](https://user-images.githubusercontent.com/89332480/194903221-e3d5bad1-6268-4eda-a0b8-dfca47372c34.png)

명령어
git clone (shift + insert) .
띄고 점 안찍으시면 폴더가 하나 더 생깁니다!

![image](https://user-images.githubusercontent.com/89332480/194903516-3d76de3d-d027-457b-8f57-da899d2151b0.png)


JS100제 폴더를 들어가셔서

![image](https://user-images.githubusercontent.com/89332480/194903583-be2dbe22-49a0-4093-a4c2-ba3c159d3a44.png)


본인의 이름의 폴더를 생성해주세요.
해당 폴더에서 .js 파일을 만들어서 문제풀이를 진행해주시고, main에 push 해주시면 됩니다.


### 추후 브랜치 생성 및 PR 과정

클론을 받았다는 가정하에 진행합니다.

### git branch 생성
![image](https://user-images.githubusercontent.com/89332480/194904686-85632fbe-8bba-4217-abf9-fe647c24e7fc.png)

branch 생성 명령어
git branch (생성할 브랜치 명)

### branch 생성 확인
![image](https://user-images.githubusercontent.com/89332480/194904943-dd2e5c0f-127c-4354-9108-6568f58342f6.png)

branch확인 명령어
git branch
main과 본인이 만든 브랜치명이 있다면 OK

### branch 이동
![image](https://user-images.githubusercontent.com/89332480/194905218-1ed0d8d5-6849-46df-9a26-41040dbd7d23.png)

branch 이동 명령어
git checkout 브랜치명
CLI 창에 뜨는 우측 하늘색 글씨가 main에서 만든 브랜치명으로 바뀌면 OK, 맥에서는 안뜰수있음


### branch에 push
![image](https://user-images.githubusercontent.com/89332480/194905706-11a0f27e-2616-44af-ab5f-7036a1757de8.png)


#### 명령어
#### git add .
#### git commit -m '#이슈번호 000번문제 해결 등 커밋메시지'
#### git push origin 브랜치명

### PR 날리기
![image](https://user-images.githubusercontent.com/89332480/194906573-b22b09a2-ab0e-41ac-bfcc-45c1517e367b.png)

![image](https://user-images.githubusercontent.com/89332480/194906626-f76da42c-cb48-4938-9554-e0dc30a6ecb7.png)

![image](https://user-images.githubusercontent.com/89332480/194906702-1a613699-9ce6-4689-833a-ac5ce0bd40dd.png)
#### base는 main , compare는 본인 브랜치명

![image](https://user-images.githubusercontent.com/89332480/194906865-2627a386-889c-41e0-8d0b-6bff740af43d.png)
#### 변경한 사항이 있다면, 스크린샷과 같이 뜸.

![image](https://user-images.githubusercontent.com/89332480/194907059-60901686-ff75-41d9-97e0-bf318b5fc814.png)
#### create pull request 초록버튼 눌러줌

![image](https://user-images.githubusercontent.com/89332480/194907138-504d8fe8-b886-47bf-bb7b-b0402d13b854.png)
#### 누르고 confirm merge 까지 누르면 main에 merge가 된다. 충돌이슈로 문제가 있다면 merge가 안됨, 문제 해결하라는 문구 뜸.

### branch삭제 명령어는
#### git branch -D 브랜치명
#### git push origin --delete 브랜치명

#### md작성좀 배우고 수정할게효..
