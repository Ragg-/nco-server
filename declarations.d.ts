import * as koa from 'koa'

declare module 'koa' {
    interface Request {
        fields: {[field: string]: string},
        files: any
        body: Buffer|string
    }
}

declare module '*.styl' {
    const _: {[className: string]: string}
    export = _
}
