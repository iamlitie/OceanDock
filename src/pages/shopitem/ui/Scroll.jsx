import React, { Component } from 'react'
import Bscroll from 'better-scroll'
import { Scroll as ScrollMain } from './styled'

export default class Scroll extends Component {

    componentDidMount () {
        // 横向滚动
        const main = document.querySelector('.main-scroll')

        new Bscroll(main , {
            scrollX: true,
            click: false,
            scrollY: false,
        })
    }
    render() {
        return (
            <ScrollMain className="main-scroll">
                <div className="main">
                    {
                        this.props.note && this.props.note.list.splice(0,8).map(item => {
                            return(
                                <div className="item" key={item.id}>
                                    <div className="let">
                                        <div className="let-title">
                                            <div>
                                                <img src={item.posterAvatar} alt=""/>
                                                <span className="name">{item.posterName}</span>
                                            </div>
                                            <span className="level">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAABGdBTUEAALGPC/xhBQAABBlJREFUSA3tVU1oXFUUPufemWkmmRdoF1XiTwklSUMaWhEXLahRLBbb2E1bLHZjoQ21bcyAXYklIK4UMqZFCIjiQrDJwp+FRigUs1EXhYYkZppYCNpGC4LB99KGzMw7nvMm9859M/lxYXHTCzPn/57vnnPuuwAP1voVwPXN/501yLXvIyidJqLnAVED0VWV0G9lzuUn3Cw1gIJcy3kieNM6Ibzr9c0OWtlh6GpXwh+/nUcCb0U97WVnuxwXoOGOVDBffI8o7I30CAsA+BcDakaEOzq56an6M5O/mRhlGEu1HiWAreYHhIetrYoJxm/vBYLt1hfx+yoXCOYLlwwYBvCdRw3NXtp7AgGLfPCHSoXCKTemBpCUEBHz1glpL33UscXKDsOVOeCIfHA94sqLA20nuEUnIx3CD5mm3Qcwe31haTnYQkAJ0ROEL7gxNYAiI8Fl48Sn0IuLpf1GdilXxgLiQ0x7b0xPGjsNH9EhhP0iSzWU1j14dKQkciFFPiu/XrElhZq1OiCdHDYOQrnkB11Z+HuX2rcxoA5HH6uO//v4y2x/bMU+5g5vY8/Mn419s4f4EK+w/RdnD1gVkNc79TP3u3JagP0ywG5gsRC+5MrV7cIQzho77/WN4V3q9c1czuxqOu7qYklcA6AaBgp3RjqizdEAA4wZH56BNdv198XWHVTk622WgivBB22v8Tzt46F5lGMXlFJfNPQe+xSxv2jchK5aITEkNdo5EplIdQuVRZ901SE4CQFi7eLqPFP2LM9PGMKXYRh+zICOMZin2dYtcpD7LJZDYtYEVHc2P8M9vm43RrJzdHdh/jmej7Sx1bSLoNnY5DYxeMUfvHe4dW/zgH9VscHhYLA1dsvWbhlH8Q2T4d4tG/DpdiwN7txe1zt5M1zndkW+UAEktynTlDqCR6eWxSbLz7WM8t4vRkKJ2whwJeL5b80KiUNKp2K3rUiFqEqE4A50rF0Sx8lshRDVhAtG7EhqVKgsAmwoc+X/dQFJNbht10wAhXTQH2hp54w2YXW7xBeRttkYAt/wFUo2Lzfz14p+gwqJI/e/MngIz3I2+XZEi8HGPoZGT4SLhue5SRne0BCh0/AJVGOGF2qRukqX11R5DniOkvy74Nhr2iU2PoR9LLknjzj+IBXmAX810iHOpTfV2w6IbkNA6Wx+jqvyk7up5averorefWTpEA09WS82+rBzM8MdkoOJrAlex55rBeHN2hCQOKrybTMxEeV25d23yzVSGi5y4qhtnPzh4K7/oz/QOuQvL82tfIdk1/cbsjPfunHC/ztAqdQIzwJ/emIrdgNdi7xVKqH2yIyJnkF08u8UM428zy2Nursxe+O8G2N4buf9W0T9ain3+eMlhDauWAhJNZE5M/XH/cv4YOf/oQL/AOa8fv1xHm4tAAAAAElFTkSuQmCC" alt=""/>
                                            </span>
                                        </div>
                                        <div className="word">{item.content}</div>
                                    </div>
                                    {
                                        // 当值为 underfined 或者 null 时才不渲染
                                        item.picList[0] ? (<div className="pic">
                                            <img src={item.picList[0]} alt=""/>
                                        </div>) : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </ScrollMain>  
        )
    }
}
