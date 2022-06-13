import React from 'react';
import { Container, InputLabel, Input, Button } from './styles';

export const ChooseName = ({
  isLogged,
  setIsLogged,
}: {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSubmit = () => {
    setIsLogged(true);
  };
  return (
    <>
      {!isLogged && (
        <Container>
          <InputLabel htmlFor="username">Enter your nickname</InputLabel>
          <Input id="username" type="text" />
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
      )}
    </>
  );
};
