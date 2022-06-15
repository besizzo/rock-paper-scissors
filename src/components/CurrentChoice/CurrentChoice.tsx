import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import $store from '../../store';
import dots from '../../shared/images/dots.svg';
import rock from '../../shared/images/rock.png';
import paper from '../../shared/images/paper.png';
import scissors from '../../shared/images/scissors.png';

const currentImage = {
  rock,
  paper,
  scissors,
};

const Container = styled.div`
  padding: 20px;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentChoice = () => {
  const store = useStore($store);

  return (
    <Container>
      {store.currentChoice !== null ? (
        <img
          src={currentImage[store.currentChoice]}
          alt="rock"
          style={{ width: '10rem', display: 'block' }}
        />
      ) : (
        <img
          src={dots}
          alt="dots"
          style={{ width: '40px', display: 'block' }}
        />
      )}
    </Container>
  );
};
