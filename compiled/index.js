"use strict";
/// <reference path="../declarations.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const Koa = require("koa");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const koaConvert = require("koa-convert");
const koaStatic = require("koa-static");
const betterBody = require("koa2-better-body");
const Router = require("koa-router");
const koaWebsocket = require("koa-websocket");
const dotenv = require("dotenv");
const AuthController = require("./controllers/AuthController");
dotenv.config();
const router = new Router();
router.get('/api/auth/status', AuthController.status);
router.post('/api/auth/signin', AuthController.signin);
const app = koaWebsocket(new Koa());
app.use(koaConvert(session({
    store: redisStore({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        prefix: process.env.REDIS_PREFIX
    }),
}, app)));
app.use(koaStatic(__dirname + '/../client/', { index: 'index.html' }));
app.use(koaConvert(betterBody({ multipart: true })));
app.use(router.routes());
app.keys = JSON.parse(process.env.COOKIE_KEYS);
if (process.env.NODE_ENV === 'production') {
    https.createServer({ key: '', cert: '' }, app.callback()).listen(4500);
}
else {
    app.listen(8000);
}
