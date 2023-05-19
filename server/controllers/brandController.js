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
    async getOne(req, res) {
        const { id } = req.params;
        const brand = await CarBrand.findOne({ where: { id } });
        return res.json(brand);
    }
}

export default new BrandController();

// Этот код представляет контроллер BrandController, который используется для создания и получения марок автомобилей из базы данных.

// Контроллер импортирует модели из файла models.js, используя относительный путь.

// Контроллер содержит два метода: create() и getAll(). Метод create() создает новую марку автомобиля в базе данных на основе полученных данных из тела запроса. Он использует метод create() модели CarBrand, который создает запись в базе данных и возвращает созданный объект.

// Метод getAll() возвращает все имеющиеся записи о марках автомобилей из базы данных. Он использует метод findAll() модели CarBrand, который возвращает массив объектов, представляющих все записи в таблице CarBrand базы данных.

// Контроллер экспортируется как экземпляр класса BrandController. Это делается с помощью ключевого слова export default. Это означает, что этот экземпляр класса будет экспортироваться по умолчанию, если модуль импортируется как объект.
