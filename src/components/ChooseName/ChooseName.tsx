import React, { useEffect } from 'react';
import { Container, InputLabel, Input, Button } from './styles';
import { useStore } from 'effector-react';

import $store, { setUsername, addPlayer } from '../../store';

export const ChooseName = ({
  isLogged,
  setIsLogged,
}: {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const store = useStore($store);

  const handleSubmit = () => {
    if (!store.newPlayerName) return;
    setIsLogged(true);
    addPlayer();
  };

  useEffect(() => {
    console.log(store.newPlayerName);
  }, [store.newPlayerName]);

  return (
    <>
      {!isLogged && (
        <Container>
          <InputLabel htmlFor="username">Enter your nickname</InputLabel>
          <Input
            id="username"
            type="text"
            placeholder="nickname"
            value={store.newPlayerName}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
      )}
    </>
  );
};
