import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import models from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// Обработка ошибки, подключается в последнюю очередь
// будет вызвана функия errorHandler компонента ErrorHandlingMiddleware.js
// замыкающий, поэтому в нем не вызвали next()
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate(); // подключение к бд
        await sequelize.sync(); // сверяет состояниебд со схемой данных
        console.log('Connection has been established successfully.');

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
