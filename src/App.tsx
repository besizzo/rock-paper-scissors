import { Main } from './pages/Main';
import styled from '@emotion/styled';
import { socket, SocketContext } from './socket';

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
  font-family: sans-serif;
`;

const App = () => (
  <SocketContext.Provider value={socket}>
    <Conatiner>
      <Main />
    </Conatiner>
  </SocketContext.Provider>
);

export default App;
