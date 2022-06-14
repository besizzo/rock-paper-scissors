import React from 'react';
import { Container, Option, OptionWrapper } from './styles';
import rock from '../../shared/images/rock.png';
import paper from '../../shared/images/paper.png';
import scissors from '../../shared/images/scissors.png';

export const GameOptions = ({
  socket,
}: {
  socket: React.MutableRefObject<{}>;
}) => {
  const handleChooseOption = (name: string) => {
    console.log('option is ', name);
    (socket.current as any).emit('choose', name);
  };

  const options = [
    {
      id: 1,
      name: 'rock',
      img: rock,
    },
    {
      id: 2,
      name: 'paper',
      img: paper,
    },
    {
      id: 3,
      name: 'scissors',
      img: scissors,
    },
  ];

  return (
    <Container>
      {options.map((option) => (
        <OptionWrapper
          onClick={() => handleChooseOption(option.name)}
          key={option.id}>
          <Option src={option.img} />
        </OptionWrapper>
      ))}
    </Container>
  );
};
