declare module '*.styl' {
    const _: {[className: string]: string}
    export = _
}

declare module 'keymirror' {
    function keyMirror<K extends Object>(keys: K): {[P in keyof K]: P}
    export = keyMirror
}
