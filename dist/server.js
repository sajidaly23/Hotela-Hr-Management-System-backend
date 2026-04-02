"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const errorHandler_1 = require("./middlewares/errorHandler");
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
const leaveRoutes_1 = __importDefault(require("./routes/leaveRoutes"));
const payrollRoutes_1 = __importDefault(require("./routes/payrollRoutes"));
const connectedDb_1 = require("./utils/connectedDb");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hotela HR Management API is running...');
});
app.use('/api/employees', employeeRoutes_1.default);
app.use('/api/attendance', attendanceRoutes_1.default);
app.use('/api/leaves', leaveRoutes_1.default);
app.use('/api/payroll', payrollRoutes_1.default);
app.use(errorHandler_1.errorHandler);
const PORT = parseInt(env_1.env.PORT, 10);
app.listen(PORT, async () => {
    await (0, connectedDb_1.connectDB)();
    console.log(`Server is running on port ${PORT}`);
});
