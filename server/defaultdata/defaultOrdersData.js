const Orders = require("../models/ordersSchema");
const ordersData = require("../constant/ordersData");


const DefaultOrdersData = async() => {
    try {
        await Orders.deleteMany({});
        
        const storeData = await Orders.insertMany(ordersData);
        
        //console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};


module.exports = DefaultOrdersData;