import {ReduceStore} from 'flux/utils'
import {fromJS, Map} from 'immutable'

import {PayloadTypes} from './actions'

export interface AppState {
    authorized: boolean
}


export default class Store extends ReduceStore<Map<any, any>, any> {
    public getInitialState(): AppState
    {
        return fromJS({
            authorized: false,
        })
    }

    public reduce(prevState: Map<any, any>, payload: PayloadTypes)
    {
        const state = prevState

        switch (payload.type) {
            case 'AUTHORIZED': {
                return state.set('authorized', true)
            }

            // case 'COMMENT_UPDATED':
            //     return state.set('comment', '')
        }

        return state
    }

    public getState(): AppState
    {
        return this._state.toJS()
    }

}
