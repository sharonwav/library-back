"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBooks = void 0;
const connection_1 = __importDefault(require("../../connection"));
const util_1 = require("util");
const query = (0, util_1.promisify)(connection_1.default.query).bind(connection_1.default);
const findBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.query;
        let books;
        if (!title) {
            books = yield query({ sql: `SELECT * FROM books` });
        }
        else {
            books = yield query({
                sql: "SELECT * FROM books where title like ?",
                values: [`%${name}%`]
            });
        }
        res.status(200).json({
            error: false,
            message: 'Get Products Success',
            data: books
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findBooks = findBooks;
