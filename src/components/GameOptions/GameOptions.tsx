import React from 'react';
import { Container, Option, OptionWrapper } from './styles';
import rock from '../../shared/images/rock.png';
import paper from '../../shared/images/paper.png';
import scissors from '../../shared/images/scissors.png';
import $store, { playerMadeChoice, Choice } from '../../store';
import { useStore } from 'effector-react';

type OptionObj = {
  id: number;
  name: Choice;
  img: string;
};

export const GameOptions = ({ socket }: { socket: any }) => {
  const store = useStore($store);
  const isBothConnected =
    store.players.playerOne.name && store.players.playerTwo.name;
  const isShowingResults = Boolean(store.currentRoundWinner);

  const handleChooseOption = (choice: Choice) => {
    socket.current.emit('choose', choice);
    playerMadeChoice(choice);
  };

  const options: OptionObj[] = [
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
          disabled={!isBothConnected || isShowingResults}
          onClick={() => handleChooseOption(option.name)}
          key={option.id}>
          <Option src={option.img} />
        </OptionWrapper>
      ))}
    </Container>
  );
};
