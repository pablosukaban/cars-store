import Models from '../models/models.js';

const { CarBrand } = Models;

class BrandController {
    async create(req, res) {
        const { car_brand_name } = req.body;
        const brand = await CarBrand.create({ car_brand_name });
        return res.json(brand);
    }
    async getAll(req, res) {
        const allBrand = await CarBrand.findAll();
        return res.json(allBrand);
    }
}

export default new BrandController();
