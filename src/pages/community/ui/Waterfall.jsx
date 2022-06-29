import React from 'react'

import {ShopsList} from './styled'

const Waterfall = (props) => {
    return (
        <>
            <ShopsList>
                {
                    props.shops.map(item => {
                        return(
                            <div className="item" key={item.NoteInfo.NoteId}>
                                <img src={item.NoteInfo.TagImage[0].Pic} alt=""/>
                                <p>{item.NoteInfo.Content}</p>
                                <div>
                                    <img src={item.UserInfo.UserLogo} alt=""/>
                                    <span>
                                        {item.UserInfo.UserName}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </ShopsList>
        </>
    )
}

export default Waterfall
