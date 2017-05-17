import {Context} from 'koa'

export const invalidRequest = (ctx: Context) => {
    ctx.status = 403
}
