import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketCar = sequelize.define('basket_car', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Car = sequelize.define('car', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    year_of_manufacture: { type: DataTypes.INTEGER, allowNull: false },
    body_type: { type: DataTypes.STRING, allowNull: false },
    car_color: { type: DataTypes.STRING, allowNull: false },
    car_price: { type: DataTypes.INTEGER, allowNull: false },
    car_image: { type: DataTypes.STRING, allowNull: false },
});

const CarModel = sequelize.define('car_model', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    car_model_name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const CarBrand = sequelize.define('car_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

const CarInfo = sequelize.define('car_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});

const ModelBrand = sequelize.define('model_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketCar);
BasketCar.belongsTo(Basket);

CarModel.hasMany(Car);
Car.belongsTo(CarModel);

CarBrand.hasMany(Car);
Car.belongsTo(CarBrand);

Car.hasMany(BasketCar);
BasketCar.belongsTo(Car);

Car.hasMany(CarInfo);
CarInfo.belongsTo(Car);

CarBrand.belongsToMany(CarModel, { through: ModelBrand });
CarModel.belongsToMany(CarBrand, { through: ModelBrand });

export default {
    User,
    Basket,
    BasketCar,
    Car,
    CarModel,
    CarBrand,
    CarInfo,
    ModelBrand,
};
