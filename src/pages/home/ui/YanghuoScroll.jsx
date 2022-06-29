import React, { Component } from 'react'

export default class YanghuoScroll extends Component {
    componentDidMount () {
        console.log(document.querySelector('.bscroll'))
    }
    render() {
        return (
            <>
                <ul className="bscroll">
                    <div className="scroll-main" ref={this.scrollMain}>
                        {
                            this.props.item.Items.map(i => {
                                return(
                                    <li key={i.Id}>
                                        <img src={i.PicUrl} alt=""/>
                                        <p>{i.Name}</p>
                                        <span>¥ {i.Price}</span>
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul> 
            </>
        )
    }
}

