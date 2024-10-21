"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_controllers_1 = require("../controllers/member.controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', member_controllers_1.createMember);
exports.default = router;
