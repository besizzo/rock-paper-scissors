import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;

`;

export const OptionWrapper = styled.button`
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid #FFF;
  &:focus {
    border-bottom: 2px solid #00b4d8;
  }
`;

export const Option = styled.img`
  display: block; 
  width: 80%;
  margin: 0 auto;
`;