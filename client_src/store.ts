import {ReduceStore} from 'flux/utils'
import {fromJS, Map} from 'immutable'

export interface AppState {
    authorized: boolean
}


export default class Store extends ReduceStore<Map<any, any>, any> {
    public getInitialState(): AppState
    {
        return fromJS({
            authorized: false
        })
    }

    public reduce(prevState: Map<any, any>, payload)
    {
        const state = prevState

        switch (payload.type) {
            case 'COMMENT_UPDATED':
                return state.set('comment', '')
        }

        return state
    }

    public getState(): AppState
    {
        return this._state.toJS()
    }

}
