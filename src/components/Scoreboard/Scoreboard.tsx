import { Container } from './styles';

export const Scoreboard = () => {
  return (
    <Container>
      <span style={{ display: 'inline-block', padding: '10px' }}>
        Player One
      </span>
      <span style={{ display: 'inline-block' }}>Player Two</span>
    </Container>
  );
};
