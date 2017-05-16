import * as React from 'react'
import * as s from './CommentView.styl'

export default class CommentView extends React.PureComponent<any, any> {
    render()
    {
        return (
            <div className={s.CommentView}>
                {['a', 'b'].map(comment => (<div className='Comment'>{comment}</div>) )}
            </div>
        )
    }
}
