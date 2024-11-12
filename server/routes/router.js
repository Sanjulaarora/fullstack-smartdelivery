const express = require("express");
const router = express.Router();
const Partners = require("../models/partnersSchema");
const Orders = require("../models/ordersSchema");
const Assignments = require("../models/assignSchema");
const AssignmentMetrics = require("../models/metricsSchema");

// Registering New Delivery Partner
router.post("/registerpartner", async(req, res) => {
    const {name, email, number, status, currentLoad, areas, startTime, endTime, rating, completedOrders, cancelledOrders} = req.body;

    try {
        const addPartner = new Partners({
            name, email, number, status, currentLoad, areas, 
            shift : { startTime, endTime }, 
            metrics : { rating, completedOrders, cancelledOrders }
        });

        const storeData = await addPartner.save();
        console.log(storeData);
        res.status(201).json(storeData);
    } 
    catch (error) {
        console.log("error" + error.message)
    }
});

//get partnersData API
router.get("/getpartners", async(req, res) => {
    try {
        const partnersData = await Partners.find();
        res.status(201).json(partnersData);
        console.log(partnersData);
    } catch (error) {
        res.status(404).json(error);
        //console.log("error" + error.message);
    }
});

//get ordersData API
router.get("/getorders", async(req, res) => {
    try {
        const ordersData = await Orders.find();
        res.status(201).json(ordersData);
        console.log(ordersData);
    } catch (error) {
        res.status(404).json(error);
        //console.log("error" + error.message);
    }
});

//get assignmentsData API
router.get("/getassignments", async(req, res) => {
    try {
        const assignmentsData = await Assignments.find();
        res.status(201).json(assignmentsData);
        console.log(assignmentsData);
    } catch (error) {
        res.status(404).json(error);
        //console.log("error" + error.message);
    }
});

//get assignmentMetricsData API
router.get("/assignmentMetrics", async(req, res) => {
    try {
        const assignmentMetricsData = await AssignmentMetrics.find();
        res.status(201).json(assignmentMetricsData);
        console.log(assignmentMetricsData);
    } catch (error) {
        res.status(404).json(error);
        //console.log("error" + error.message);
    }
});

module.exports = router;