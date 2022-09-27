# shop-98 [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzjdtm%2Fshop-98%2Fedit%2Fmaster%2FREADME.md&count_bg=%233DC889&title_bg=%234041BE&icon=hey.svg&icon_color=%23FEFFFE&title=Github&edge_flat=false)](https://hits.seeyoufarm.com)

[![SeoYongHyun's GitHub stats](https://github-readme-stats.vercel.app/api?username=zjdtm)](https://github.com/anuraghazra/github-readme-stats)
## React와 Node를 이용한 쇼핑몰
* "리액트를 다루는 기술" 책의 연장선으로 공부 목적으로 간단한 쇼핑몰을 만들기로 결정함
  이 프로젝트를 통해 React와 Node를 공부하는데 도움이 되었음.
  
### 대표적인 기능
* 로그인, 회원가입 기능
* 쇼핑몰 게시판 기능
* 상세페이지 상품 선택 후 장바구니에 추가, 삭제 기능
* 아임포트 api를 사용한 결제 기능 

## 기술 스택
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-Saga-999999?style=for-the-badge&logo=Redux-Saga&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/Koa-33333D?style=for-the-badge&logo=Koa&logoColor=white">
</div>

프로젝트 주소 : 
https://shop-98.herokuapp.com/


## 로그인 &  회원가입
### 책의 구현된 기능에 주소검색 기능을 추가
<div>
  <img src="https://user-images.githubusercontent.com/35757620/190334602-7e8e8893-c3e0-4dcd-9d76-8bb23b2fcae7.gif" width="500" height="700"/>
  <img src="https://user-images.githubusercontent.com/35757620/190334676-3156c076-ac99-46b6-ac9b-596bd2074908.gif" width="500" height="700"/>
</div>
<b>회원가입시 JWT를 적용</b>
<pre>
<code>
    UserSchema.methods.generateToken = function () {
    const token = jwt.sign(
      //첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
      {
        _id: this.id,
        username: this.username,
      },
      process.env.JWT_SECRET, //두 번째 파라미터에는 JWT암호를 넣습니다.
      {
        expiresIn: '7d', //7일 동안 유효함
      },
    );
    return token;
  };
</code>
</pre>
  

## 게시판
![게시판](https://user-images.githubusercontent.com/35757620/190322853-4c5ac08d-236f-48bd-bfbf-04db0c685ad1.png)

## 장바구니 추가 & 삭제 (Redux)
<img src="https://user-images.githubusercontent.com/35757620/190335698-b237e7e1-23bc-4dad-89c4-fbad1b3a1063.gif"/>
<pre>
<code>
  const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
    address: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
  });
</code>
</pre>
<b>Cart 스키마는 User 스키마에 배열 형태로 추가</b>

## 결제
![결제](https://user-images.githubusercontent.com/35757620/190322882-43c16e6c-c86e-49ef-889b-096366a1ec43.png)

![footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer&text=Thank%20you%20&fontSize=90)
