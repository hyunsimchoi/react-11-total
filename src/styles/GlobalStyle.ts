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
      justify-self: start;
  }

  /* 중앙 메뉴 */
  .nav-menu {
      display: flex;
      align-items: center;
      justify-content: center;
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
      width: auto;
      min-width: 80px;
      padding: 8px 18px;
      border: 1px solid #77764b;
      border-radius: 20px;
      background: transparent;
      color: #f5ecd2;
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
      accent-color: #777d48;
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

  /*  Coin Tracker 스타일--- */
  .coin-page {
      max-width: 1500px;
      margin: 0 auto;
  }

  .coin-page h1 {
      margin: 0 0 24px;
      font-size: 30px;
  }

  /* 2. 왼쪽 목록 + 오른쪽 상세 정보 */
  .coin-layout {
      display: grid;
      grid-template-columns: 340px minmax(0, 1fr);
      gap: 24px;
      align-items: stretch;
  }

  /* 3. 양쪽 패널 공통 디자인 */
  .coin-list-panel,
  .coin-detail-panel {
      min-width: 0;
      background: #454a2a;
      border: 1px solid #77764b;
      border-radius: 18px;
      padding: 24px;
  }

  /* 4. 왼쪽 코인 목록 제목 */
  .coin-list-panel h2 {
      margin: 0 0 18px;
      font-size: 20px;
  }

  /* 5. 코인 목록 스크롤 */
  .coin-list {
      max-height: 540px;
      overflow-y: auto;
      list-style: none;
      padding: 0 6px 0 0;
      margin: 0;
  }

  /* 6. 목록 항목 간격 */
  .coin-list li {
      margin-bottom: 8px;
  }

  /* 7. 코인 선택 버튼 */
  .coin-list-button {
      display: block;
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 10px;
      background: #f4e9c9;
      color: #252b13;
      text-align: left;
      cursor: pointer;
  }

  /* 마우스를 올렸을 때 */
  .coin-list-button:hover {
      background: #dce0b7;
  }

  /* 현재 선택한 코인 */
  .coin-list-button.selected {
      background: #b9bd90;
      outline: 2px solid #f5d881;
      outline-offset: -2px;
  }

  /* 8. 코인 이름과 가격 */
  .coin-list-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-bottom: 6px;
      font-size: 14px;
  }

  /* 9. 코인 기호와 변동률 */
  .coin-list-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      font-size: 12px;
  }

  /* 긴 코인 이름 줄바꿈 */
  .coin-list-top strong:first-child {
      min-width: 0;
      overflow-wrap: anywhere;
  }

  /* 가격 오른쪽 정렬 */
  .coin-list-top strong:last-child {
      flex-shrink: 0;
      text-align: right;
      white-space: nowrap;
  }

  /* 10. 상승 및 하락 색상 */
  .coin-up {
      color: #087c32;
      font-weight: bold;
  }

  .coin-down {
      color: #c52e2e;
      font-weight: bold;
  }

  /* 11. 오른쪽 상세 정보 패널 */
  .coin-detail-panel {
      min-height: 620px;
  }

  .coin-detail-panel h2 {
      margin: 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #77764b;
      font-size: 30px;
  }

  /* 코인 기호 */
  .coin-symbol {
      margin-left: 12px;
      font-size: 16px;
      font-weight: normal;
      color: #b9bd90;
  }

  /* 12. 상세 정보 카드 4개 */
  .coin-stats {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 28px;
  }

  /* 개별 카드 */
  .coin-stat-card {
      min-width: 0;
      padding: 22px;
      background: #f4e9c9;
      color: #252b13;
      border-radius: 12px;
  }

  /* 카드 항목 이름 */
  .coin-stat-card p {
      margin: 0 0 10px;
      font-size: 13px;
      color: #777765;
  }

  /* 카드 데이터 */
  .coin-stat-card strong {
      font-size: 21px;
      overflow-wrap: anywhere;
  }

  /* 24시간 변동률 */
  .coin-change {
      margin-top: 24px;
      font-size: 16px;
  }

  /* API 오류 */
  .coin-error {
      color: #ff8585;
  }

  /* 13. 스크롤바 디자인 */
  .coin-list::-webkit-scrollbar {
      width: 7px;
  }

  .coin-list::-webkit-scrollbar-thumb {
      background: #858969;
      border-radius: 10px;
  }

  .coin-list::-webkit-scrollbar-track {
      background: #30351d;
      border-radius: 10px;
  }

  /* 14. 태블릿 화면 */
  @media (max-width: 1000px) {
      .coin-layout {
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 16px;
      }

      .coin-list-panel,
      .coin-detail-panel {
          padding: 16px;
      }
  }

  /* 15. 모바일 화면 */
  @media (max-width: 700px) {
      .coin-layout {
          grid-template-columns: 1fr;
      }

      .coin-list {
          max-height: 300px;
      }

      .coin-detail-panel {
          min-height: auto;
      }

      .coin-stats {
          grid-template-columns: 1fr;
      }
  }


  /* ===============================
   BLACK THEME
================================ */

  /* 홈페이지 전체 배경 */
  body.black-theme {
      background-color: #080808;
      color: #f5f5f5;
  }

  /* Header */
  body.black-theme .site-header {
      background: #151515;
      border-bottom-color: #383838;
  }

  body.black-theme .nav-menu a.active {
      color: #ffffff;
  }

  body.black-theme .theme-button {
      background: #252525;
      border-color: #555555;
      color: #ffffff;
  }

  /* Home 제목 영역 */
  body.black-theme .dashboard-banner {
      background: #171717;
  }

  /* Home 프로젝트 카드 */
  body.black-theme .project-card,
  body.black-theme .project-grid > :nth-child(even) .project-card {
      background: #252525;
      color: #f5f5f5;
      border: 1px solid #404040;
  }

  /* Todo 목록 */
  body.black-theme .todo-page h1 {
      color: #f5f5f5;
  }

  body.black-theme .todo-item {
      background: #252525;
      color: #f5f5f5;
  }

  body.black-theme .todo-page form input {
      background: #202020;
      border-color: #505050;
      color: #ffffff;
  }

  body.black-theme .todo-page form button {
      background: #444444;
      color: #ffffff;
  }

  body.black-theme .todo-item button {
      background: #333333;
      border-color: #555555;
      color: #ffffff;
  }

  /* Coin 양쪽 패널 */
  body.black-theme .coin-list-panel,
  body.black-theme .coin-detail-panel {
      background: #171717;
      border-color: #383838;
  }

  /* Coin 목록 버튼 */
  body.black-theme .coin-list-button {
      background: #252525;
      color: #f5f5f5;
  }

  body.black-theme .coin-list-button:hover {
      background: #343434;
  }

  body.black-theme .coin-list-button.selected {
      background: #414141;
      outline-color: #999999;
  }

  /* Coin 상세 정보 카드 */
  body.black-theme .coin-stat-card {
      background: #252525;
      color: #f5f5f5;
  }

  body.black-theme .coin-stat-card p {
      color: #bbbbbb;
  }

  body.black-theme .coin-symbol {
      color: #aaaaaa;
  }

  /* 코인 변동률은 구분되도록 유지 */
  body.black-theme .coin-up {
      color: #73d69a;
  }

  body.black-theme .coin-down {
      color: #ff8585;
  }

  /* Coin 내부 구분선과 스크롤 */
  body.black-theme .coin-detail-panel h2 {
      border-bottom-color: #383838;
  }

  body.black-theme .coin-list::-webkit-scrollbar-track {
      background: #171717;
  }

  body.black-theme .coin-list::-webkit-scrollbar-thumb {
      background: #555555;
  }
`;

export default GlobalStyle;
