const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  created_at: Date,
  state: { type: Number, default: 1 },
  total_price: Number,
  items: [{
    name: String,
    price: Number,
    size: { type: String, enum: ['m', 's', 'l']},
    quantity: Number,
  }],
  user: { type: ObjectId, ref: 'User' }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
