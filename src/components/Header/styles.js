import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 960px; */
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 10px;
      height: 30px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999999;
      padding: 10px;
    }
  }
  aside {
    display: flex;
    text-align: right;

    div {
      margin-right: 0px;

      a {
        display: block;
        color: red;
      }
    }
  }
`;
