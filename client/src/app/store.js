import { configureStore } from "@reduxjs/toolkit";
import partnerReducer from "../features/partnerSlice";
import orderReducer from "../features/orderSlice";
import assignmentReducer from "../features/assignmentSlice";
import metricsReducer from "../features/metricsSlice";

export const store = configureStore({
    reducer: {
        partners: partnerReducer,
        orders: orderReducer,
        assignments: assignmentReducer,
        metrics: metricsReducer
    }
});