import {Context} from 'koa'
import * as ResponseHelper from '../helper/ResponseHelper'
import {NicoSession, NicoException} from 'node-nicovideo-api'

export const signin = async (ctx: Context) => {
    const {userId, password} = ctx.query

    if (!userId || !password) {
        return ResponseHelper.invalidRequest(ctx)
    }

    try {
        const session = await NicoSession.login(userId, password)
        ctx.session.nicoSessionKey = session.sessionId
    } catch (e) {
        if (e instanceof NicoException) {
            ctx.body = {success: true}
        } else {
            throw e
        }
    }
}

export const status = async (ctx: Context) => {
    ctx.body = {authorized: !!ctx.session.nicoSessionKey}
}
