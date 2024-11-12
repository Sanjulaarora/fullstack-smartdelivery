const mongoose = require("mongoose");
const validator = require("validator");

const partnersSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error ("not valid email address")
            }
        }
    },
    number : {
        type: String,
        required: true,
        unique: true,
        maxlength: 10
    },
    status : {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
        required: true
    },
    currentLoad : {
        type: String,
        required: true,
        default: "0",
        max: 3
    },
    areas : {
        type: [String],
        required: true
    },
    shift : {
        startTime : {
            type: String,
            required: true
        },
        endTime : {
            type: String,
            required: true 
        }
    },
    metrics : {
        rating : {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        completedOrders : {
            type: Number,
            default: 0
        },
        cancelledOrders: {
            type: Number,
            default: 0
        }
    }
});

const Partners = mongoose.model("partners", partnersSchema);

module.exports = Partners;