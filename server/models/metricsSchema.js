const mongoose = require("mongoose");

const metricsScehma = new mongoose.Schema({
    totalAssigned: {
        type: Number,
        required: true,
        min: 0
    },
    successRate: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    averageTime: {
        type: Number,
        required: true,
        min: 0
    },
    failureReasons: [
        {
            reason: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ]
});

const AssignmentMetrics = mongoose.model("assignmentmetrics", metricsScehma);

module.exports = AssignmentMetrics;