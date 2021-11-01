// eslint-disable-next-line import/extensions
import { io } from './http';

interface RoomUser {
  socketId: string;
  username: string;
  room: string;
}

interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
}

const users: RoomUser[] = [];
const messages: Message[] = [];

function getMessagesRoom(room: string) {
  const messagesRoom = messages.filter((message) => message.room === room);
  return messagesRoom;
}

io.on('connection', (socket) => {
  socket.on('select_room', (data, callback) => {
    socket.join(data.room);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.room,
    );

    if (userInRoom) {
      userInRoom.socketId = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socketId: socket.id,
      });
    }

    const messagesRoom = getMessagesRoom(data.room);
    callback(messagesRoom);
  });

  socket.on('message', (data) => {
    const message: Message = {
      room: data.room,
      username: data.username,
      text: data.message,
      createdAt: new Date(),
    };

    messages.push(message);

    io.to(data.room).emit('message', message);
  });
});
