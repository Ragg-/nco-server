import * as _ from 'lodash'
import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as path from 'path'
import * as URL from 'url'
import * as qs from 'querystring'
import * as classnames from 'classnames'

import * as s from './Modal.styl'

interface Props {
    show?: boolean
}

export default class Modal extends React.Component<Props, any>
{
    static propTypes = {
        children: PropTypes.element.isRequired,
        show: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        show: false,
    }

    constructor(props: Props, context: any)
    {
        super(props, context)

        this.state = {
            show: this.props.show
        }
    }

    componentDidMount()
    {
    }

    componentWillUnmount()
    {
        // this.window.destroy()
    }

    render()
    {
        const {show, children} = this.props

        return (
            <div className={classnames(s.Modal, {[s['Modal--show']]: show})}>
                {children}
            </div>
        )
    }
}
