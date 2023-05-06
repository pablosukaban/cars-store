import Models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const { CarModel } = Models;

class ModelController {
    async create(req, res) {
        const { car_model_name } = req.body;
        const model = await CarModel.create({ car_model_name });
        return res.json(model);
    }
    async getAll(req, res) {
        const models = await CarModel.findAll();
        res.json(models);
    }
}

export default new ModelController();
