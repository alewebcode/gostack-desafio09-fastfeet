import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 330px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  height: 400px;
  padding: 40px 15px 0px 15px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: left;

    input {
      border: 1px solid #ccc;
      border-radius: 3px;
      height: 38px;
      padding: 0 15px;
      margin: 0 0 10px;
      font-weight: bold;
    }
    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
