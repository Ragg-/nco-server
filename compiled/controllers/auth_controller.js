"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseHelper = require("../helper/ResponseHelper");
const node_nicovideo_api_1 = require("node-nicovideo-api");
exports.signin = (ctx) => __awaiter(this, void 0, void 0, function* () {
    const { userId, password } = ctx.query;
    if (!userId || !password) {
        return ResponseHelper.invalidRequest(ctx);
    }
    node_nicovideo_api_1.NicoSession.login(userId, password);
});
exports.check = (ctx) => __awaiter(this, void 0, void 0, function* () {
    if (!ctx.session.nicoSessionKey) {
        ctx.body = {
            authorized: false,
        };
        return;
    }
});
