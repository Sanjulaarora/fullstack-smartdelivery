const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  area: {
    type: String,
    required: true
  },
  items: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],
  status: {
    type: String,
    enum: ["pending", "assigned", "picked", "delivered"],
    default: "pending"
  },
  scheduledFor: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    default: null
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;