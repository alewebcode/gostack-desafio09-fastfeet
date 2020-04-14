import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 30px 30px;
`;

export const Content = styled.div`
  margin: 0 auto;

  table {
    border-collapse: separate;
    border-spacing: 0 15px;
    width: 100%;
  }
  table td,
  th {
    padding: 8px;
  }
  table td {
    border-color: transparent;
    background: #fff;
    color: #666666;
  }
  td:nth-child(1) {
    border-radius: 4px 0 0 4px;
  }
  td:last-child {
    border-radius: 0 8px 8px 0;
  }
  table th {
    padding-top: 12px;
    padding-bottom: 0px;
    text-align: left;
    font-weight: bold;
    color: #444444;
  }
  tr {
    line-height: 35px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    /*margin-top: 20px;*/

    form {
      flex: 1;

      input {
        border: 1px solid #dddddd;
        border-radius: 4px 4px 4px 4px;
        line-height: 30px;
        width: 225px;
      }
    }

    button {
      line-height: 30px;
      width: 140px;
      background: #7d40e7;
      border: 1px solid #dddddd;
      color: #fff;
      border-radius: 4px 4px 4px 4px;
      font-weight: bold;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
export const handleColorStatus = (status) => {
  switch (status) {
    case 'pendente':
      return css`
        & {
          background: #f0f0df;
          > span {
            color: #c1bc35;
          }
        }
        &::before {
          background: #c1bc35;
        }
      `;
    case 'retirada':
      return css`
        & {
          background: #bad2ff;
          > span {
            color: #4d85ee;
          }
        }
        &::before {
          background: #4d85ee;
        }
      `;
    case 'entregue':
      return css`
        & {
          background: #dff0df;
          > span {
            color: #2ca42b;
          }
        }
        &::before {
          background: #2ca42b;
        }
      `;
    case 'cancelada':
      return css`
        & {
          background: #fab0b0;
          > span {
            color: #de3b3b;
          }
        }
        &::before {
          background: #de3b3b;
        }
      `;
    default:
      return 'background: none;';
  }
};
export const Status = styled.div`
  display: flex;
  padding: 4px 8px;
  border-radius: 30px;
  max-width: 7.6em;
  align-items: center;
  line-height: 15px;
  ${({ status }) => handleColorStatus(status)} span {
    padding-left: 6px;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
  }
  &::before {
    content: '';
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;
export const Actions = styled.div`
  position: relative;
`;

export const ActionList = styled.div`
  display: none;
  &:hover {
    display: block;
  }
`;
export const Badge = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover + ${ActionList} {
    display: block;
  }
`;

export const Options = styled.button`
  position: absolute;
  width: 160px;
  left: calc(50% - 80px);
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #999999;
  box-shadow: 1px 1px 8px #000000;
  padding: 10px;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  & + div {
    margin-top: 2px;
    padding-top: 6px;
    border-top: 1px solid #eeeeee;
  }
  a {
    padding: 5px 0;
    color: #666;
    font-size: 12px;
    display: flex;
    align-items: start;
    margin-left: 2px;
    span {
      margin-left: 2px;
    }
  }
`;
