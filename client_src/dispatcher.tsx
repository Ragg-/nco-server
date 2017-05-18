import {Dispatcher} from 'flux'

import {PayloadTypes} from './actions'

const appDispatcher = new Dispatcher<PayloadTypes>()
export default appDispatcher
