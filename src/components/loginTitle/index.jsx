import React from 'react'

import { Header , Input , Btn } from './styled'

const HeaderTitle = (props) => {
    
    return(
        <Header>
            {props.title}
            <span onClick={props.cancel}></span>
        </Header> 
    )
}

export {
    HeaderTitle,
    Input,
    Btn
}
