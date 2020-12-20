"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taggedLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const timestamp_1 = __importDefault(require("./timestamp"));
const logger = (...messages) => {
    console.log(chalk_1.default.green(timestamp_1.default()), '|', ...messages);
};
const taggedLogger = tag => (...messages) => logger(tag, ...messages);
exports.taggedLogger = taggedLogger;
exports.default = logger;
//# sourceMappingURL=index.js.map