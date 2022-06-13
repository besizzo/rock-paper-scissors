import { useState } from 'react';
import { ChooseName } from '../../components/ChooseName';
import { Game } from '../../components/Game';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 620px;
`;

export const Main = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Container>
        {isLogged ? (
          <ChooseName isLogged={isLogged} setIsLogged={setIsLogged} />
        ) : (
          <Game />
        )}
      </Container>
    </>
  );
};
