import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    & h1 {
      color: #444444;
      font-size: 24px;
    }
    & button {
      margin: 4px 4px;
      border: 0px;
      border-radius: 4px;
      padding: 8px 16px;
      align-items: center;
      color: #ffffff;
      text-transform: uppercase;
      justify-content: center;

      &.grey {
        background-color: #cccccc;
      }

      &.purple {
        background-color: #7d40e7;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  background: #fff;

  form {
    /* display: flex;
    flex-direction: column; */
    justify-content: left;
    padding: 20px;
    width: 100%;
  }

  input {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 100%;
  }
`;
