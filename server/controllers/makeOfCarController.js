import Models from '../models/models.js';

const { CarMake } = Models;

class MakeOfCarController {
    async create(req, res) {
        const { make_of_the_car_name } = req.body;
        const makes = await CarMake.create({ make_of_the_car_name });
        return res.json(makes);
    }
    async getAll(req, res) {
        const allMakes = await CarMake.findAll();
        return res.json(allMakes);
    }
}

export default new MakeOfCarController();
