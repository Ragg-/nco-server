import * as React from 'react'

import * as AppAction from '../../actions'
import {AppState} from '../../store'
import CommentView from '../../components/CommentView/CommentView'
import Modal from '../../components/Modal/Modal'

import * as s from './App.styl'

interface Props {
    state: AppState
}

class SocketHandler extends React.PureComponent<any, any>
{
    private _socket: SocketHandler

    componentDidMount()
    {
        this._socket = new WebSocket('ws://localhost/api/stream')
    }

    render()
    {
        return null
    }
}

export default class AppView extends React.PureComponent<Props, any>
{
    componentDidMount()
    {
        this.props.state
    }

    authorize = () =>
    {
        AppAction.authorize()
    }

    render()
    {
        const {authorized} = this.props.state
        console.log(s)

        return (
            <div className={s.AppView} >
                <Modal show={!authorized}>
                    <div className={s.Authorize}>
                        <div className={s.Authorize_Inner}>
                            <h1>ニコニコ動画へログイン</h1>
                            <div className="FormGroup">
                                <input ref='email' type='text' className='Input' placeholder='Email(niconico)' />
                            </div>
                            <input ref='pass' type='password' className='Input' placeholder='Password' />
                            <button onClick={this.authorize} />
                        </div>
                    </div>
                </Modal>
                <CommentView comments />
            </div>
        )
    }
}
