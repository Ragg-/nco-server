import * as koa from 'koa'

declare module 'koa' {
    interface Request {
        fields: {[field: string]: string},
        files: any
        body: Buffer|string
    }

    interface Context {
        session: {
            cookie: any
        }&Nco.Session
    }
}

declare namespace Nco {
    interface Session {
        nicoSessionKey?: string
    }
}
