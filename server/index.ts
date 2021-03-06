/// <reference path="../declarations.d.ts" />

import * as https from 'https'
import * as Koa from 'koa'
import * as session from 'koa-generic-session'
import * as redisStore from 'koa-redis'
import * as koaConvert from 'koa-convert'
import * as koaStatic from 'koa-static'
import * as betterBody from 'koa2-better-body'
import * as Router from 'koa-router'
import * as koaWebsocket from 'koa-websocket'
import * as dotenv from 'dotenv'

import * as AuthController from './controllers/AuthController'

dotenv.config()

const router = new Router()
router.get('/api/auth/status', AuthController.status)
router.post('/api/auth/signin', AuthController.signin)

const app = koaWebsocket(new Koa())
app.use(koaConvert(session({
    store: redisStore({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        prefix: process.env.REDIS_PREFIX
    }),
}, app)))

const wsRouter = new Router()
wsRouter.all('/api/stream', )
app.ws.use()


app.use(koaStatic(__dirname + '/../client/', {index: 'index.html'}))
app.use(koaConvert(betterBody({multipart: true})))
app.use(router.routes())
app.keys = JSON.parse(process.env.COOKIE_KEYS)

if (process.env.NODE_ENV === 'production') {
    https.createServer({key: '', cert: ''}, app.callback()).listen(4500)
} else {
    app.listen(8000)
}
