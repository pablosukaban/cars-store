import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import Models from '../models/models.js';

import ApiError from '../error/ApiError.js';

const { Car, CarInfo } = Models;
class CarController {
    async create(req, res, next) {
        try {
            let {
                car_model_id,
                car_brand_id,
                year_of_manufacture,
                body_type,
                car_color,
                car_price,
                info,
            } = req.body;
            const { car_image } = req.files;

            const fileName = uuidv4() + '.jpg';

            car_image.mv(path.resolve('static', fileName));

            const car = await Car.create({
                carModelId: car_model_id,
                carBrandId: car_brand_id,
                year_of_manufacture,
                body_type,
                car_color,
                car_price,
                car_image: fileName,
            });

            if (info) {
                info = JSON.parse(info);
                info.forEach((element) => {
                    CarInfo.create({
                        title: element.title,
                        description: element.description,
                        carId: car.id,
                    });
                });
            }

            return res.json(car);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res) {
        let { carModelId, carBrandId, limit, page } = req.query;

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let cars;

        if (!carBrandId && !carModelId) {
            cars = await Car.findAndCountAll({ limit, offset });
        }

        if (carBrandId && !carModelId) {
            cars = await Car.findAndCountAll({
                where: { carBrandId },
                limit,
                offset,
            });
        }

        if (!carBrandId && carModelId) {
            cars = await Car.findAndCountAll({
                where: { carModelId },
                limit,
                offset,
            });
        }

        if (carBrandId && carModelId) {
            cars = await Car.findAndCountAll({
                where: { carModelId, carBrandId },
                limit,
                offset,
            });
        }

        return res.json(cars);
    }
    async getOne(req, res) {
        const { id } = req.params;

        const car = await Car.findOne({
            where: { id },
            include: [{ model: CarInfo, as: 'info' }],
        });

        return res.json(car);
    }
}

export default new CarController();
