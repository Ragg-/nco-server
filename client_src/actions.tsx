import Axios from 'axios'
import keyMirror from 'keymirror'

import Payload from './payload'
import dispatcher from './dispatcher'

export const DispatchTypes = keyMirror({
    AUTHORIZED: null,
})

export type PayloadTypes =
    Payload<'AUTHORIZED', {}>

export const authorize = async (userId: string, password: string) => {
    const {data: res} = await Axios.post('/auth/signin', {userId, password})

    if (res.success) {
        dispatcher.dispatch(new Payload(DispatchTypes.AUTHORIZED, {}))
    }
}

export const receiveComment = async () => {

}
