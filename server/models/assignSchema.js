const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    partnerId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["success", "failed"],
        required: true,
    },
    reason: {
        type: String,
        required: function () {
            return this.status === "failed";
        },
    },
});

const Assignments = mongoose.model("assignments", assignSchema);

module.exports = Assignments;