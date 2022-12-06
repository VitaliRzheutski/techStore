const db = require("./database");
const User = require("./user");
const Order = require("./order");
const Product = require("./product");
const orderDetail = require("./orderDetail");

User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, {
  through: {
    model: "orderDetail",
    as: "productId",
    unique: false,
  },
});
Order.belongsToMany(Product, {
  through: {
    model: "orderDetail",
    as: "orderId",
    unique: false,
  },
});
// db.sync({
//   force: true
// });

module.exports = {
  db,
  Product,
  User,
  Order,
  orderDetail,
};
