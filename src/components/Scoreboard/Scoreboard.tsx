import { Container, Player } from './styles';
import dots from '../../shared/images/dots.svg';
import circle from '../../shared/images/dots-circle.svg';

export const Scoreboard = () => {
  return (
    <Container>
      <Player style={{ textAlign: 'left' }}>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Player One
        </span>
        <span style={{ display: 'block' }}>---</span>
      </Player>
      <Player style={{ textAlign: 'right' }}>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          {/* <img src={circle} alt="circle" style={{ height: '17px' }} />{' '} */}
        </span>
        <span style={{ display: 'block' }}>---</span>
        <span style={{ display: 'block' }}>---</span>
      </Player>
    </Container>
  );
};
