
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const url = 'http://38.180.158.187:3001';


  useEffect(() => {
      const fetchMessage = async () => {
          try {
              const response = await axios.get(`${url}/message`);
              setMessage(response.data);
          } catch (error) {
              console.error('Error fetching message:', error);
          }
      };

      fetchMessage();
  }, []);

  if(!message){
    <p>Соединение с сервером nodejs не установлено</p>
  }

  return (
    <div className="app">
      <h1>Привет, тут мы сможем писать свои скрипты</h1>

      <h3>Сообщение с nodejs</h3>
      <p>{message}</p>
      <br /><br />
      <h3>Сообщение с Laravel</h3>
      <p>{message}</p>
    </div>
  );
};

export default App;
