import styled from 'styled-components'

const ProductInfo = styled.div `
    padding: .1rem .1rem 0;
    div:nth-of-type(1) {
        p:nth-of-type(1) {
            height: .444rem;
            line-height: .22rem;
            font-size: .14rem;
            font-weight: 600;
            span:nth-of-type(1) {
                color: #c33;
                border: 1px solid #c33;
                font-size: .12rem;
                transform: scale(0.8);
                display: inline-block;
                line-height: 1;
                padding: 0.01rem .03rem;
            }
        }
        p:nth-of-type(2) {
            color: #c33;
            span {
                margin-left: .05rem;
                font-size: .16rem;
                font-weight: 600;
            }
        }
    }
    .shopmsg {
        height: .4rem;
        line-height: .4rem;
        border-top: 1px solid #eee;
        position: relative;
        span {
            margin-right: .1rem;
        }
        span:nth-of-type(3) {
            right: 0;
            top: 50%;
            content: "";
            display: block;
            position: absolute;
            width: .1rem;
            height: .1rem;
            border-width: 1px;
            border-style: solid;
            border-color: #9b9b9b #9b9b9b transparent transparent;
            transform: translateY(-50%) rotate(45deg);
            -moz-transform: translateY(-50%) rotate(45deg);
            -ms-transform: translateY(-50%) rotate(45deg);
        }
    }
    .shopmsg-slider {
        
    }

`

const PingjiaSty = styled.div `
    .title-m {
        height: .44rem;
        text-align: center;
        background: #f1f1f1;
        line-height: .44rem;
        color: #999;
        font-size: .14rem;
    }
    .title {
        padding-left: .1rem;
        padding: .1rem;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        div:nth-of-type(1) {
            i {
                font-size: .14rem;
                margin-right: .05rem;
            }
            span {
                .star {
                    display: inline-block;
                    width: .12rem;
                    height: .12rem;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAm9JREFUSA2tVk1oE0EUnpltDA1WW9qsJ39QtNL2Jh4Ee+lB9NKKQksPCQWlF0EQf04e9ezNixRy0HYTWhSrCHrw7EW8BFQKRg8ioVYxkjCxu+P3MLtMdhZ2UlwI8+bN975v3r43s2Gsh6c+N3cHv3s9hDBuC94qFg9sS7nBlOIZIY4OeV7NJlbYgAgD8ptKqYxirG9bqVu2cVYZNAoFtyllDaT9HWLJc7lDbqn0LU3IKoNWu31NIyfOLG82r6eR03pqBj8WFgb/tFqf8Xr26IQI/J0dGDi4d2lpS/fH7dQMQH4jTk4kqMVu2Wik1sLIQFUqzuba2hHO+bgfBGcwLkIgcSNYCyD0AHovRSZTHZme3uCzs76eBa/Pz59mvj+pOJ+A2jjIjgOQ1UE92BKi7yFaxVjtc5x1joPzBaT7eyCxhkLkq3CEuIQIaR1lDyTOy2J4ZeUVd5zz/1mkLYS46JbLL6IioxZnle8/gdBO33+YG5FfyHvec3JEAjRBPc6hHo9h7lSki5w4uwTIQSK40NbRCQ7NbR9qWZDN5MvlZ3qM0d/03hjnj3SQla3Uapyc4gyBDtlHK1INRH2vTSMzWUCpwxHC0kDtEmOSBTgfteSNYLgJEmMSBVDgRHDElmDwf1eMsWII/CoWh9FFI3EkdQl8DzHexViPr2NTg/RhivsNAXxcjN2D9DVznBP7KpUCuuz2rlxuFL77HdGIsyUlXZRdjyGAXj4WImB/wKmcAemUu7z8LvQPlUo/4buC9ZNo6Tehn+HPQGR3DFMgCL4jqIbdXc2PjU3gyD+NB4Vz9P1b1/NOYROL8H0SSm2Ga+H4FwgBzaCgOy8CAAAAAElFTkSuQmCC');
                    background-size: 100% 100%;
                }
            }
        }
        div:nth-of-type(2) {
            color: #999;
            font-size: .12rem;
        }
    }
    .info {
        padding-left: .1rem;
        color: #999;
        font-size: .12rem;
        .pingjia {
            padding-top: .1rem;
            height: .27rem;
            line-height: .17rem;
        }
    }
`

const Scroll = styled.div `
    .main {
        margin-top: .1rem;
        overflow-x: auto;
        width: 23rem;
        .item {
            padding-top: .1rem;
            float: left;
            display: flex;
            height: 1.16rem;
            width: 2.76rem;
            margin-right: .1rem;
            margin-bottom: .15rem;
            box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
            .pic {
                height: 100%;
                img {
                    width: 1.16rem;
                    height: 100%;
                }
            }
            .let {
                .let-title {
                    height: .25rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 .05rem;
                    div {
                        display: flex;
                        align-items: center;
                        img {
                            width: .25rem;
                            height: .25rem;
                            border-radius: 50%;
                            margin-right: .05rem;
                        }
                        .name {
                            color: #666;
                        }
                    }
                    .level {
                        width: .18rem;
                        height: .12rem;
                        img {
                            height: 100%;
                            vertical-align: top;
                        }
                    }
                }
                .word {
                    margin-top: .1rem;
                    height: .54rem;
                    line-height: .18rem;
                    padding: 0 .1rem;
                    color: #292929;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
`

const ShopMsg = styled.div `
    .title {
        height: .32rem;
        line-height: .32rem;
        color: #999;
        font-size: .14rem;
        text-align: center;
        background: #f1f1f1;
    }
    .title-m {
        height: .4rem;
        padding-left: .2rem;
        line-height: .4rem;
        border-bottom: 1px solid #eee;
    }
    .msg-top {
        height: .22rem;
        margin: .2rem 0;
        line-height: .22rem;
        text-align: center;
        color: #646464;
        position: relative;
    }
    .msg-top::before {
        content: "";
        position: absolute;
        right: calc(50% + .4rem);
        top: calc(50% + 1px);
        width: .35rem;
        height: 1px;
        background-color: #e95656;
    }
    .msg-top::after {
        content: "";
        position: absolute;
        left: calc(50% + .4rem);
        top: calc(50% + 1px);
        width: .35rem;
        height: 1px;
        background-color: #e95656;
    }
    .msg-m {
        margin-bottom: .1rem;
        color: #292929;
        line-height: .17rem;
        padding: 0 .1rem;
        font-size: .12rem;
    }
    .property-list {
        display: flex;
        align-items : center;
        width: 90%;
        margin: 0 auto;
        padding: 0 .3rem;
        margin: .1rem 0;
        margin-top: .1rem;
        .key {
           color: #9b9b9b; 
           display: inline-block;
           width: .7rem;
           font-size: .12rem;
           margin-right: .2rem;
        }
        .value {
            color: #383838;
            display: inline-block;
            font-size: .12rem;
            flex: 1;
        }
    }
`

const SellerWrap = styled.div `
    margin-top: .15rem;
    padding: .15rem .12rem;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.2;
        .wrap {
            display: flex;
            align-items: center;
            img {
                margin-right: .1rem;
                width: .3rem;
                height: .3rem;
                border-radius: 50%;
            }
            .title-top {
                p {
                    color: #292929;
                    font-size: .14rem;
                }
                div {
                    display: flex;
                    align-items: center;
                    color: #999;
                    font-size: .12rem;
                    span {
                        margin-right: .05rem;
                    }
                    img {
                        width: .13rem;
                        height: .13rem;
                        margin-right: .05rem;
                    }
                    span:nth-of-type(2) {
                        color: #c33;
                    }
                }

            }
        }
        .guanzhu {
            width: .7rem;
            height: .3rem;
            line-height: .3rem;
            text-align: center;
            border: 1px solid #c33;
            border-radius: 5px;
            font-size: .14rem;
            color: #c33;
        }
    }
    .main {
        display: flex;
        margin: .2rem 0;
        li {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: .12rem;
            span:nth-of-type(1) {
                color: #999;
            } 
        };
        li:nth-of-type(3) {
            span:nth-of-type(2) {
                color: #e95656;
                font-size: .16rem;
                font-weight: 500;
            }
        }
        li:nth-of-type(4) {
            span {
                color: #666;
            }
            i {
                color: #e95656;
                margin-left: .05rem;
            }
        }
    }
    .button {
        width: 1.1rem;
        height: .28rem;
        margin: 0 auto;
        line-height: .28rem;
        text-align: center;
        border: 1px solid #f28f25;
        color: #f28f25;
        font-size: .12rem;
        border-radius: 8px;
        img {
            width: .14rem;
            height: .12rem;
            margin-right: .05rem;
        }
    }
`

const Slider = styled.div `
    padding: 0 .2rem;
    .price {
        height: 1.2rem;
        display: flex;
        .pic {
            width: 1.2rem;
            height: 1.2rem;
            img {
                width: 100%;
            }
        }
        .shop-price {
            margin-left: .2rem;
            font-size: .12rem;
            padding-top: .2rem;
            color: #646464;
            p:nth-of-type(1) {
                height: .26rem;
                color: #c33;
                span {
                    font-size: .18rem;
                    font-weight: 500;
                }
            }
            p:nth-of-type(2) {
                height: .18rem;
                line-height: .18rem;
                margin: .1rem 0;
            }
        }
    }
    .type {
        border-top: 1px solid #eee;
        margin-top: .15rem;
        p {
            font-size: .12rem;
            color: #646464;
            padding-top: .1rem;
        }
        .options {
            span {
                display:inline-block;
                padding: 0 .1rem;
                height: .3rem;
                line-height: .3rem;
                border: 1px solid #646464;
                border-radius: .03rem;
                font-size: .12rem;
                margin-top: .1rem;
                margin-right: .15rem;
            }
        }
    }
    .mount {
        margin-top: .1rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
        font-size: .12rem;
        color: #646464;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: .15rem 0;
        div {
            span {
                width: .3rem;
                height: .3rem;
                background: #ddd;
                display: inline-block;
                line-height: .3rem;
                text-align: center;
            }
            span:nth-of-type(2) {
                width: .45rem;
                background: #fff;
            }
        }
    }
`

const Pay = styled.div `
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: .15rem;
    border-top: 1px solid #eee;
    span {
        display: inline-block;
        width: 50%;
        height: .45rem;
        line-height: .45rem;
        text-align: center;
        color: #fff;
    }
    span:nth-of-type(1) {
        background: #f28f25;
    }
    span:nth-of-type(2) {
        background: #c33;
    }
`

const IndexPay = styled.div `
    position: fixed;
    width: 100%;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align:center;
    background: #fff;
    border-top: 1px solid #eee;
    color: #fff;
    display: flex;
    span {
        width: 30%;
        display: inline-block;
    }
    span:nth-of-type(1) {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        color: #999;
        img {
            width: .16rem;
            height: .16rem;
        }
        i {
            height: .16rem;
            line-height: .16rem;
            font-size: .12rem;
        }
    }
    span:nth-of-type(2) span {
        color: #fff;
        display: inline-block;
        width: 100%;
        background-color: rgba(242,143,37,.8);
    }
    span:nth-of-type(3) {
        background-color: #c33;
    }
`

export {
    ProductInfo,
    PingjiaSty,
    Scroll,
    ShopMsg,
    SellerWrap,
    Slider,
    Pay,
    IndexPay
}