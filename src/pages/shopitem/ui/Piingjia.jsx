import React from 'react'
import { PingjiaSty } from './styled'
import Scroll from './Scroll'

function star (num) {
    let html = ''
    for (var i = 0 ; i < num ; i ++) {
        html += `
        <span class="star"></span>
        `
    }
    return html
}


const Pingjia = (props) => {
    return (
        <>
            <PingjiaSty>
                <div className="title-m">评价</div>
                <div className="title">
                    <div>
                        <i>买家评价</i> 
                        <span dangerouslySetInnerHTML={{__html: star(Number(props.note.evaluation).toFixed())}}></span>
                        <i>{props.note.evaluation && Number(props.note.evaluation).toFixed(1)}</i>
                    </div>
                    <div>
                        查看全部{props.note && props.note.total}条&gt;
                    </div>
                </div>
                <div className="info">
                    <div className="pingjia">购买过该商品的用户认为</div>
                    <Scroll {...props}></Scroll>
                </div>
            </PingjiaSty> 
        </>
    )
}

export default Pingjia