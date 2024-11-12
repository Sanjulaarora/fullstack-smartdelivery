const AssignmentMetrics = require("../models/metricsSchema");
const metricsData = require("../constant/assignMetricsData");

const DefaultMetricsData = async() => {
    try {
        await AssignmentMetrics.deleteMany({});

        const storeMetricsData = await AssignmentMetrics.insertMany(metricsData);
        
        //console.log(storeMetricsData);
    } catch (error) {
        console.log("error" + error.message);
    }
};


module.exports = DefaultMetricsData;