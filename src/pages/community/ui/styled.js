import styled from 'styled-components'

const Wrap = styled.div `
    background: #e8e8e8;
`

const Header = styled.div `
    height: .4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        height: .4rem;
        img {
            height: 100%;
        }
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
`

const Hot = styled.div `
    margin-top: .1rem;
    background: #fff;
    font-size: .12rem;
    .title {
        height: .38rem;
        display: flex;
        padding: 0 .1rem;
        justify-content: space-between;
        align-items: center;
        i {
            position: relative;
            margin-left: .14rem;
        }
        i::after {
            content: '';
            background: url('https://s1.ymatou.com/notem/images//discovery/Shape@2x-1b2125d62a.png');
            width: .11rem;
            height: .12rem;
            background-size: 100% 100%;
            position: absolute;
            top: 0.02rem;;
            left: -0.14rem;
        }
        span {
            color: #9B9B9B;
            position: relative;
            padding-right: .1rem;
            &::after {
                top: 0.08rem;
                right: 0;
                content: '';
                display: block;
                position: absolute;
                width: .08rem;
                height: .08rem;
                border-width: .01rem;
                border-style: solid;
                border-color: #9B9B9B #9B9B9B transparent transparent;
                transform: translate(0, -50%) rotate(45deg);
            }
        }
    }
`

const ShopsList = styled.div `
    padding: 0 2%;
    /* -moz-row-count:2;  */
    /* -webkit-row-count:2;  */
    /* column-count:2; */
    /* -moz-row-gap: 10px; */
    /* -webkit-row-gap: 10px; */
    /* column-gap: 10px; */
    .item {
        margin-top: 5%;
        background: #fff;
        /* -moz-page-break-inside: avoid;
        -webkit-row-break-inside: avoid;
        break-inside: avoid; */
        img {
            width: 100%;
        }
        p {
            height: .36rem;
            transform: scale(0.9);
            font-size: .12rem;
            line-height: .18rem;
            width: 100%;
            margin: 0.1rem auto;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //行数
            -webkit-box-orient: vertical;
        }
        div {
            padding: 0 .1rem .1rem;
            display: flex;
            align-items: center;
            img {
                width: .2rem;
                height: .2rem;
                border-radius: 50%;
            }
            span {
                color: #666;
                font-size: .12rem;
                margin-left: .1rem;
            }
        }
    }
`

export {
    Wrap,
    Header,
    Hot,
    ShopsList
}