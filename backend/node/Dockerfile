# Используем официальный образ Node.js
FROM node:20.18.1

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем nodemon глобально
RUN npm install -g nodemon

# Копируем остальные файлы
COPY . .

# Открываем порт
EXPOSE 3001

# Запускаем приложение
CMD ["npm", "start"]
