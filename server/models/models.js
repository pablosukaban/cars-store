import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Orders = sequelize.define("orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_email: { type: DataTypes.STRING, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_phone: { type: DataTypes.STRING, allowNull: false },
  car_id: { type: DataTypes.INTEGER, allowNull: false },
  manager_id: { type: DataTypes.INTEGER, allowNull: false },
  total_price: { type: DataTypes.FLOAT, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false }
});

const Manager = sequelize.define("manager", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fullName: { type: DataTypes.STRING, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, allowNull: false }
});

const Car = sequelize.define("car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  year_of_manufacture: { type: DataTypes.INTEGER, allowNull: false },
  body_type: { type: DataTypes.STRING, allowNull: false },
  car_color: { type: DataTypes.STRING, allowNull: false },
  car_price: { type: DataTypes.INTEGER, allowNull: false },
  car_image: { type: DataTypes.STRING, allowNull: false },
  car_description: { type: DataTypes.STRING, allowNull: false }
});

const CarModel = sequelize.define("car_model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  car_model_name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

const CarBrand = sequelize.define("car_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  car_brand_name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

const CarInfo = sequelize.define("car_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false }
});

const ModelBrand = sequelize.define("model_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Credits = sequelize.define("credits", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_email: { type: DataTypes.STRING, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_phone: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false }
});

CarModel.hasMany(Car);
Car.belongsTo(CarModel);

CarBrand.hasMany(Car);
Car.belongsTo(CarBrand);

Car.hasMany(CarInfo, { as: "info" });
CarInfo.belongsTo(Car);

CarBrand.belongsToMany(CarModel, { through: ModelBrand });
CarModel.belongsToMany(CarBrand, { through: ModelBrand });

Orders.belongsTo(User, { foreignKey: "user_id" });
Orders.belongsTo(Car, { foreignKey: "car_id" });

export default {
  User,
  Orders,
  Car,
  CarModel,
  CarBrand,
  CarInfo,
  ModelBrand,
  Manager,
  Credits
};

// Basket,
// BasketCar,

// User.hasOne(Basket);
// Basket.belongsTo(User);

// Basket.hasMany(BasketCar);
// BasketCar.belongsTo(Basket);

// Car.hasMany(BasketCar);
// BasketCar.belongsTo(Car);
