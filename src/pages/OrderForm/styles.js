import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 80px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & h1 {
      color: #444444;
      font-size: 24px;
    }
    & button {
      margin: 4px 4px;
      border: 0px;
      border-radius: 4px;
      padding: 8px 16px;
      align-content: center;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;

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
  padding: 8px;
  border-radius: 4px;

  form {
    margin-top: 20px;
    padding: 10px;
    display: flex;
    flex-grow: 1;

    div input {
      width: 100%;
      margin-bottom: 15px;
      padding: 12px 16px;
      border-radius: 4px;
      border: 2px solid red;
      font-size: 15px;
      color: #444;
      transition: border-color 0.2s;
    }
  }
`;
