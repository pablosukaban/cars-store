import Models from '../models/models.js';

const {CarModel} = Models;

class ModelController {
    async create(req, res) {
        const {car_model_name} = req.body;
        const model = await CarModel.create({car_model_name});
        return res.json(model);
    }

    async getAll(req, res) {
        const models = await CarModel.findAll();
        res.json(models);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const model = await CarModel.findOne({where: {id}});
        res.json(model);
    }

    async delete(req, res) {
        const {id} = req.params;
        const model = await CarModel.destroy({where: {id}});
        res.json(model);
    }
}

export default new ModelController();

// Данный код экспортирует класс ModelController со следующими методами:

// create(req, res) - метод, который создает новую модель автомобиля на основе данных, полученных из запроса. Он извлекает имя модели автомобиля из тела запроса, создает новую модель в базе данных и возвращает созданную модель в формате JSON в ответ на запрос.
// getAll(req, res) - метод, который извлекает все имеющиеся модели автомобилей из базы данных и возвращает их в формате JSON в ответ на запрос.
// Оба метода используют модель CarModel, экспортированную из модуля ../models/models.js.
