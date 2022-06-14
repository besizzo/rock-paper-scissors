import React from 'react';
import io from 'socket.io-client';

const SOCKET_URL = 'https://front-task-rps-4.herokuapp.com/';

export const socket = io(SOCKET_URL);
export const SocketContext = React.createContext(socket);