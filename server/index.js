import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json('Hello World');
});

const start = async () => {
    try {
        await sequelize.authenticate(); // подключение к бд
        await sequelize.sync(); // сверяет состояниебд со схемой данных
        console.log('Соединение установлено успешно');

        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
