import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
  position: absolute;
  height: 40%;
  width: 80%;
  left: 10%;
  background-color: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const MessageBox = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsBox = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  border-bottom: 2px solid #fff;
  &:hover {
    border-bottom: 2px solid #00b4d8;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
