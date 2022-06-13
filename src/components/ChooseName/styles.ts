import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 10px;
  margin: auto;
  max-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button`
  width: 85px;
  margin: 0 auto;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const InputLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;

  {...props}
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #BBBBBB;
  margin: 20px;
  padding: 5px;
  font-size: 1.3rem;
  text-align: center;
  &:focus {
    outline: none;
  };
  {...props}
`;
