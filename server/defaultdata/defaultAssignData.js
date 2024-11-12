const Assignments = require("../models/assignSchema");
const assignmentsData = require("../constant/assignData");

const DefaultAssignmentsData = async() => {
    try {
        await Assignments.deleteMany({});

        const storeAssignmentData = await Assignments.insertMany(assignmentsData);
        
        //console.log(storeAssignmentData);
    } catch (error) {
        console.log("error" + error.message);
    }
};


module.exports = DefaultAssignmentsData;