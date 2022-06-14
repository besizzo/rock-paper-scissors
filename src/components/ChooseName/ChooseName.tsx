import React, { useEffect } from 'react';
import { Container, InputLabel, Input, Button } from './styles';
import { useStore } from 'effector-react';
import $store, { setUsername } from '../../store';

export const ChooseName = ({
  setIsLogged,
}: {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const store = useStore($store);

  const handleSubmit = () => {
    if (!store.newPlayerName) return;
    localStorage.setItem('username', JSON.stringify(store.newPlayerName));
    setIsLogged(true);
  };

  useEffect(() => {
    const loadedName: string | null = localStorage.getItem('username');
    loadedName
      ? setUsername(JSON.parse(loadedName))
      : localStorage.setItem('username', '');
  }, []);

  return (
    <>
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
    </>
  );
};
