import styled from 'styled-components'

const Wrap = styled.div `
    background: #f1f1f1;
    height: 100%;
`

const Header = styled.div `
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    position: relative;
    background: #fff;
    font-size: .16rem;
    font-weight: 500;
    .let {
        padding: .1rem;
        color: #9b9b9b;
        font-size: .12rem;
        line-height: 1.5;
    }
    .btn {
        position: absolute;
        top: 0;
        right: 0;
        width: .8rem;
        height: .4rem;
        display: flex;
        span {
            display: flex;
            width: .4rem;
            height: .4rem;
            justify-content: center;
            align-items: center;
            img {
                width: .17rem;
                height: .16rem;
            }
        }
    }
`

const ShopCar = styled.div `
    margin-top: .55rem;
    .shops {
        display: flex;
        margin: .14rem 0 .1rem;
        align-items: center;
        background: #fff;
        padding: .1rem 0;
        .btn {
            width: .42rem;
            height: .7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                display: inline-block;
                width: .22rem;
                height: .22rem;
                border-radius: 50%;
                border: 1px solid #ccc;
            } 
            span.active {
                background: #c33;
            }  
        }
        .main {
            height: .7rem;
            display: flex;
            img {
                height: .7rem;
            }
            div {
                margin: 0 .1rem;
                p {
                    width: 1.6rem; 
                    font-size: .12rem;
                    height: .35rem;
                    line-height: .17rem;
                    overflow: hidden;
                    span {
                        display: inline-block;
                        border: 1px solid #c33;
                        border-radius: .03rem;
                        transform: scale(0.8);
                        transform-origin: left;
                    }
                }
                p:nth-of-type(2) {
                    color: #9b9b9b;
                }
            }
        } 
        .count {
            display: flex;
            flex: 1;
            height: .7rem;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            justify-content: space-between;
            >span {
                color: #c33;
                font-size: .14rem;
                /* text-align: right; */
            }
            div {
                display: flex;
                width: 100%;
                span {
                    text-align: center;
                    flex: 1;
                    background: #eee;
                }
                span:nth-of-type(2) {
                    background: #fff;
                }
            }
            i {
                width: .14rem;
                height: .15rem;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC');
                background-size: 100% 100%;
            }
        }
    }
`

const PayBar = styled.div `
    height: .5rem;
    position: fixed;
    width: 100%;
    bottom: 0;
    background : #fff;
    display: flex;
    div:nth-of-type(1) {
        width: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            display: inline-block;
            width: .22rem;
            height: .22rem;
            border: 1px solid #ccc;
            border-radius: 50%;
        }
        span.active {
            background: #c33;
        }
    }
    div:nth-of-type(2) {
        flex: 1;
        text-align: right;
        padding-right: .1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-of-type(1) {
            font-size: .14rem;
            span {
                color: #c33;
            }
        }
        p:nth-of-type(2) {
            font-size: .12rem;
            color: #9b9b9b;
            display: inline-block;
            transform: scale(0.8);
            transform-origin: right;
        }
    }
    div:nth-of-type(3) {
        width: 1.1rem;
        background: #c33;
        color: #fff;
        line-height: .5rem;
        text-align: center;
    }
`

export {
    Wrap,
    Header,
    ShopCar,
    PayBar
}