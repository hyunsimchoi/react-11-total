import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 전체 요소의 크기 계산 */
  * {
    box-sizing: border-box;
  }

  /* 홈페이지 전체 */
  body {
    margin: 0;
    background: #252b13;
    color: #f5ecd2;
    font-family: Arial, "Malgun Gothic", sans-serif;
  }

  /* 블랙 테마 전체 */
  body.black-theme {
    background: #080808;
    color: #f5f5f5;
  }

  /* 모든 링크 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 버튼과 입력창 */
  button,
  input {
    font: inherit;
  }
`;

export default GlobalStyle;
