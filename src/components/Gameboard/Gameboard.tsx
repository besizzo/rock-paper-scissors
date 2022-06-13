import styled from '@emotion/styled';
import rock from '../../shared/images/rock.png';
import dots from '../../shared/images/dots.svg';
import circle from '../../shared/images/dots-circle.svg';

const Container = styled.div`
  flex-grow: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EnemyPick = styled.div`
  /* background-color: lightblue; */
  padding: 20px;
  margin: auto;
`;

const GameText = styled.div`
  /* background-color: grey; */
  line-height: 80px;
  text-align: center;
`;

export const Gameboard = () => {
  return (
    <Container>
      <Wrapper>
        <GameText>waiting for another player</GameText>
        <EnemyPick>
          {/* <img
            src={rock}
            alt="rock"
            style={{ width: '200px', textAlign: 'center' }}
          /> */}
          <img
            src={dots}
            alt="dots"
            style={{ width: '40px', textAlign: 'center' }}
          />
        </EnemyPick>
      </Wrapper>
    </Container>
  );
};
