import {v4 as uuidv4} from 'uuid';
import path from 'path';

import Models from '../models/models.js';

import ApiError from '../error/ApiError.js';

const {Car, CarInfo} = Models;

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
                car_description
            } = req.body;
            const {car_image} = req.files;

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
                car_description
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
        let {carModelId, carBrandId, limit, page} = req.query;

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let cars;

        if (!carBrandId && !carModelId) {
            cars = await Car.findAndCountAll({limit, offset});
        }

        if (carBrandId && !carModelId) {
            cars = await Car.findAndCountAll({
                where: {carBrandId},
                limit,
                offset,
            });
        }

        if (!carBrandId && carModelId) {
            cars = await Car.findAndCountAll({
                where: {carModelId},
                limit,
                offset,
            });
        }

        if (carBrandId && carModelId) {
            cars = await Car.findAndCountAll({
                where: {carModelId, carBrandId},
                limit,
                offset,
            });
        }

        return res.json(cars);
    }

    async getOne(req, res) {
        const {id} = req.params;

        const car = await Car.findOne({
            where: {id},
            include: [{model: CarInfo, as: 'info'}],
        });

        return res.json(car);
    }

    async delete(req, res) {
        const {id} = req.params;

        await Car.destroy({
            where: {id},
        });

        return res.json({
            message: 'Car deleted',
        })
    }
}

export default new CarController();

// Этот код отвечает за контроллеры для работы с машинами в backend-е. В частности, класс CarController имеет следующие методы:

// create: метод для создания нового объекта машины в базе данных. При создании нового объекта машины, изображение машины сохраняется на сервере с уникальным идентификатором. Также метод обрабатывает информацию об автомобиле и добавляет ее в соответствующую таблицу CarInfo, если таковая информация была передана.
// getAll: метод для получения списка всех машин из базы данных. Метод принимает несколько параметров, которые используются для фильтрации списка машин.
// getOne: метод для получения одного объекта машины из базы данных. Метод используется для получения подробной информации об одной машине, включая дополнительную информацию об объекте из таблицы CarInfo.
