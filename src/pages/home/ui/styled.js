import Styled from 'styled-components'
import border from 'utils/border'

const HeaderAd = Styled.div `
    height : .5rem;
    background : url('http://pic1.ymatou.com/G02/M06/47/B9/CgvUBVpv7eSAWJr4AAB3io7qxQM413_15_2_o.png'); 
    background-size : 100%;
    position : relative;
    span {
        position : absolute;
        width : .15rem; 
        height : .15rem; 
        top : .17rem;
        left : .06rem
    }
    div {
        position : absolute;
        width : .7rem;
        height : .3rem;
        top : .1rem;
        right : .1rem;
    }
`

const Header = Styled.header `
    height: .4rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        height: 100%;
        display: flex;
        align-items: center;
        img {
            height: 100%;
        }
        .nav {
            width: .8rem;
            span {
                display: inline-block;
                width: .24rem;
                height: .27rem;
                margin: 0 .08rem;
                font-size: .12rem;
                text-align: center;
                line-height: .27rem;
                color: #646464;
            }
        }
    }
    .menu {
        span {
            display: inline-block;
            width: .4rem;
            height: .4rem;
            img {
                width: .18rem;
                height: .18rem;
                margin: .11rem
            }
        }
    }
`

const ChangeBorder = border(
    Styled.span ``
)

const Main = Styled.div `
    .main {
        height: 1.62rem;
        .main-loop {
            padding: .16rem 0 .16rem .08rem;
            width: 17.5rem;
            overflow: hidden;
            height: 100%;
            display: inline-block;
            div {
                margin-right: .1rem;
                width: 2.8rem;
                display: inline-block;
                height: 100%;
                position: relative;
                overflow: hidden;
                img {
                    width: 100%;
                    margin-top: -0.03rem;
                }
                span {
                    position: absolute;
                    z-index: 999;
                    left: 0;
                    bottom: 0;
                    width: .94rem;
                    height: .16rem;
                    background: url('https://s1.ymatou.com/homem/images/countdown-bg-fb044aac5f.png');
                    background-size: 100% 100%;
                    display: flex;
                    align-items: center;
                    i {
                        display: inline-block;
                        font-size: .12rem;
                        transform: scale(0.7);
                        color: #fff;
                    }
                }
            }
        }
    }

    .chanel {
        height: 2.07rem;
        margin: .08rem;
        background: url('http://pic1.ymatou.com/G02/M07/86/1B/CgvUBVvrzheAQTFDAAH0yCAeoYw144_15_8_w_o.jpg');
        background-size: 100% 100%;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            color: #fff;
            background: rgba(0,0,0,0.6);
            h2 {
                font-size: .17rem;
                margin-top: .7rem;
                margin-bottom: .2rem;
            }
            i {
                width: .88rem;
                height: .3rem;
                border: 1px solid #ccc;
                border-radius: .1rem;
                text-align: center;
                line-height: .3rem;
            }
        }
    }

    .foreign-goods {
        padding-top: .24rem;
    }

    .like {
        background: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        padding: 0 .16rem;
        justify-content: space-between;
        .item {
            width: 1.67rem;
            img {
                width: 100%;
            }
            .item-msg {
                padding: .1rem .05rem;
                background: #fff;
                margin-bottom: .1rem;
                color: #424242;
                h3 {
                    height: .36rem;
                    font-size: .12rem;
                    line-height: .18rem;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; //行数
                    -webkit-box-orient: vertical;
                    font-weight: 400;
                }
                i {
                    display: flex;
                    align-items: center;
                    margin-top: .05rem;
                    width: .5rem;
                    height: .17rem;
                    border-radius: .05rem;
                    border: 1px solid #c33;
                    color: #c33;
                    span {
                        display: block;
                        font-size: .12rem;
                        transform: scale(0.7);
                    }
                }
                div {
                    margin-top: .05rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span:nth-of-type(1) {
                        font-size: .16rem;
                        color: #c33;
                    }
                    span:nth-of-type(2) {
                        font-size: .12rem;
                        margin-right: .1rem;
                        div {
                            display: inline-block;
                            width: .1rem;
                            height: .1rem;
                            border-radius: 50%;
                            margin-right: .05rem;
                            img {
                               width: 100%;
                            }
                        } 
                    }
                }
            }
        }
        .button {
            width: 100%;
            height: .32rem;
        }
    }
    .to-top {
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        background: url(https://s1.ymatou.com/homem/images/gototop-2ab3b79818.png);
        background-size: 100% 100%;
        position: fixed;
        right: .1rem;
        bottom: .3rem;
    }
    footer {
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: .5rem 0;
        p:nth-of-type(1) {
            color: #646464;
            width: 50%;
            font-size: .14rem;
            display: flex;
            justify-content: space-around;
        }
        p:nth-of-type(2) {
            font-size: .12rem;
            color: #9b9b9b;
            margin-top: .1rem;
        }
    }
`

const Scroll = Styled.div `
    margin-top: .15rem;
    img {
        width: 100%;
    }
    .bscroll{
        padding-left: .2rem;
        .scroll-main {
            display: flex;
            flex-wrap: nowrap;
            width: 10rem;
            li {
                display: inline-block;
                width: 1.08rem;
                img {
                    height: 100%;
                    border: 1px solid #f5f5f5;
                }
                p {   
                    height: .16rem;
                    line-height: .16rem;
                    font-size: .12rem;;
                    white-space: nowrap;
                    text-overflow:ellipsis;    
                    overflow: hidden;
                }
                span {
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    height: .16rem;
                    font-size: .14rem;
                    line-height: .16rem;
                    color: #c33;
                }
            }
        }
    }
`

export {
    HeaderAd,
    Header,
    ChangeBorder,
    Main,
    Scroll
}