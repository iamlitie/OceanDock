import React, { Component } from 'react'

import { Wrap , DoneList } from './styled'

export default class Done extends Component {
    render() {
        return (
            <Wrap>
                <div>
                    <DoneList>Android 下载</DoneList>
                    <DoneList>iOS 下载</DoneList>
                </div>
            </Wrap>
        )
    }
}
