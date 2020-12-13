"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var timestamp_1 = __importDefault(require("./timestamp"));
var nullEmitter = function () { };
var baseEmitter = function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays([timestamp_1.default(), '|'], messages));
};
function prefixEmitter(emitter) {
    var prefix = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prefix[_i - 1] = arguments[_i];
    }
    return function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        return emitter.apply(void 0, __spreadArrays(prefix, messages));
    };
}
;
function simpleLogger(verbosity) {
    if (verbosity === void 0) { verbosity = 'info'; }
    var logger = {
        trace: nullEmitter, debug: nullEmitter, info: nullEmitter,
        warn: nullEmitter, error: nullEmitter, fatal: nullEmitter,
    };
    switch (verbosity) {
        case 'all':
        case 'trace': logger.trace = baseEmitter;
        case 'debug': logger.debug = baseEmitter;
        case 'info': logger.info = baseEmitter;
        case 'warn': logger.warn = baseEmitter;
        case 'error': logger.error = baseEmitter;
        case 'fatal': logger.fatal = baseEmitter;
    }
    return function (tag) {
        return {
            trace: prefixEmitter(logger.trace, tag, '|', 'trace', '|'),
            debug: prefixEmitter(logger.debug, tag, '|', 'debug', '|'),
            info: prefixEmitter(logger.info, tag, '|', 'info ', '|'),
            warn: prefixEmitter(logger.warn, tag, '|', 'warn ', '|'),
            error: prefixEmitter(logger.error, tag, '|', 'error', '|'),
            fatal: prefixEmitter(logger.fatal, tag, '|', 'fatal', '|'),
        };
    };
}
exports.default = simpleLogger;
//# sourceMappingURL=index.js.map