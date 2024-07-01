const { Schema, Model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema");

const OrderModel = new Model("order", OrderSchema);

module.exports = { OrderModel };





















