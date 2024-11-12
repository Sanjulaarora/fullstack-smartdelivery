require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Partners = require("./models/partnersSchema");
const Orders = require("./models/ordersSchema");
const Assignments = require("./models/assignSchema");
const AssignmentMetrics = require("./models/metricsSchema");
const DefaultOrdersData = require("./defaultdata/defaultOrdersData");
const DefaultAssignmentsData = require("./defaultdata/defaultAssignData");
const DefaultMetricsData = require("./defaultdata/defaultMetricsData");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 8004;

//for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

app.listen(port,() => {
    console.log( `server is started at port number ${port}` );
});

DefaultOrdersData();
DefaultAssignmentsData();
DefaultMetricsData();