import { Main } from './pages/Main';
import styled from '@emotion/styled';

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
  font-family: sans-serif;
`;

const App = () => (
  <Conatiner>
    <Main />
  </Conatiner>
);

export default App;
