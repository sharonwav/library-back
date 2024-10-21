"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 1000;
app.get('/', (req, res) => {
    res.send('<p>You are on the server!</p>');
});
let whiteList = ['http://localhost:1000'];
app.use((0, cors_1.default)({
    origin: '*'
}));
const routers_1 = __importDefault(require("./routers"));
app.use(routers_1.default);
app.listen(port, () => {
    console.log(`You are on the server http://localhost:${port}`);
});
