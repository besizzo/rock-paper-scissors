import { Container, Option, OptionWrapper } from './styles';
import rock from '../../shared/images/rock.png';
import paper from '../../shared/images/paper.png';
import scissors from '../../shared/images/scissors.png';

export const GameOptions = () => {
  return (
    <Container>
      <OptionWrapper>
        <Option src={rock} />
      </OptionWrapper>
      <OptionWrapper>
        <Option src={paper} />
      </OptionWrapper>
      <OptionWrapper>
        <Option src={scissors} />
      </OptionWrapper>
    </Container>
  );
};
