import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());


// Получение избранных товаров пользователя
app.get('/message', (req, res) => {
	res.send('Привет! сообщение пришло с node!');
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});