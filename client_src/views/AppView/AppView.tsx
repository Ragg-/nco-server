import * as React from 'react'

import CommentView from '../CommentView'

import * as s from './AppView.styl'

export default class AppView extends React.PureComponent<any, any> {
    render()
    {
        return (
            <div className={s.AppView} >
                <CommentView />
            </div>
        )
    }
}
