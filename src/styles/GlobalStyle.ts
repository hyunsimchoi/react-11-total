import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #252b13;
    color: #f5ecd2;
    font-family: Arial, "Malgun Gothic", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    font: inherit;
  }

  /* ------- Header 전체 ---------*/
  .site-header {
      position: sticky;
      top: 0;
      z-index: 100;

      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 20px;

      padding: 16px 36px;
      background: #30351d;
      border-bottom: 1px solid #77764b;
  }

  /* 왼쪽 로고 */
  .logo {
      margin: 0;
      font-size: 26px;
  }

  /* 중앙 메뉴 */
  .nav-menu {
      display: flex;
      align-items: center;
      gap: 24px;
  }

  /* 현재 선택된 메뉴 */
  .nav-menu a.active {
      color: #f5d881;
      font-weight: bold;
  }

  /* 오른쪽 다크 버튼 */
  .theme-button {
      justify-self: end;
      padding: 8px 18px;
      border: 1px solid #77764b;
      border-radius: 20px;
      background: transparent;
      color: inherit;
      cursor: pointer;
  }

  /* 화면이 좁아졌을 때 */
  @media (max-width: 900px) {
      .site-header {
          grid-template-columns: 1fr auto;
      }

      .nav-menu {
          grid-row: 2;
          grid-column: 1 / -1;
          justify-content: center;
          flex-wrap: wrap;
      }
  }


  /* ------ Home 화면 전체 여백 ------ */
  .main-content {
      padding: 36px;
  }

  /* Home 제목 영역 */
  .dashboard-banner {
      padding: 36px;
      margin-bottom: 28px;
      border-radius: 18px;
      background: #454a2a;
  }

  .dashboard-banner h1 {
      margin: 0 0 12px;
      font-size: 32px;
  }

  .dashboard-banner p {
      margin: 0;
  }

  /* 프로젝트 카드 배치 */
  .project-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
  }

  .project-grid > a {
      display: block;
  }

  /* 프로젝트 카드 디자인 */
  .project-card {
      min-height: 180px;
      height: 100%;
      padding: 28px;
      border-radius: 18px;
      background: #f4e9c9;
      color: #222819;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;

      text-align: center;
  }

  /* 짝수 번째 카드는 세이지 그린 */
  .project-grid > :nth-child(even) .project-card {
      background: #b9bd90;
  }

  /* 아이콘 */
  .card-icon {
      font-size: 32px;
  }

  /* 카드 제목 */
  .project-card h2 {
      margin: 0;
      font-size: 21px;
  }

  /* 카드 설명 */
  .project-card p {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
  }

  /* 화면이 좁아지면 2열 */
  @media (max-width: 900px) {
      .project-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
      }
  }

  /* 모바일 화면에서는 1열 */
  @media (max-width: 600px) {
      .project-grid {
          grid-template-columns: 1fr;
      }

      .main-content {
          padding: 20px;
      }
  }
  
      
  /* --- Todo 페이지 전체 --- */
  .todo-page {
      max-width: 600px;
      margin: 0 auto;
  }

  /* Todo 제목 */
  .todo-page h1 {
      color: #f5ecd2;
      font-size: 28px;
  }

  /* 입력창과 추가 버튼 */
  .todo-page form {
      display: flex;
      gap: 10px;
      margin: 24px 0;
  }

  /* 입력창 */
  .todo-page form input {
      flex: 1;
      min-width: 0;
      padding: 12px;
      border: 1px solid #aaa;
      border-radius: 8px;
  }

  /* 추가 버튼 */
  .todo-page form button {
      padding: 12px 20px;
      background: #b9bd90;
      color: #252b13;
      border: none;
      border-radius: 8px;
      cursor: pointer;
  }

  /* 할 일 목록 */
  .todo-list {
      list-style: none;
      padding: 0;
  }

  /* 개별 할 일 */
  .todo-item {
      display: flex;
      align-items: center;
      gap: 10px;

      padding: 12px;
      margin-bottom: 10px;

      background: #f4e9c9;
      color: #252b13;
      border-radius: 8px;
  }

  /* 체크박스 */
  .todo-item input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
  }

  /* 삭제 버튼 */
  .todo-item button {
      margin-left: auto;
      padding: 6px 12px;

      border: 1px solid #aaa;
      border-radius: 6px;
      background: #fff;
      color: #252b13;
      cursor: pointer;
  }
`;

export default GlobalStyle;
