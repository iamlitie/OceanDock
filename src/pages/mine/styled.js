import styled from 'styled-components'
import border from 'utils/border'

const Wrap = styled.div `
    background: #f1f1f1;
    height: 100%;
`

const Header = styled.div `
    background: #fff;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    font-size: .17rem;
    color: #515151;
    position: relative;
    div {
        position: absolute;
        top: 0;
        right: 0;
        height: .4rem;
        display: flex;
        flex-direction: row;
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: .4rem;
            height: .4rem;
            img {
                width: .15rem;
                height: .15rem;
            }
        }
    }
`

const Banner = styled.div `
    height: 1.08rem;
    background: url(https://s1.ymatou.com/myorderm/images/person-bg-c26f0f5750.png);
    background-size: 100%;
    display: flex;
    align-items: center;
    div {
        margin-left:.35rem;
        margin-right: .1rem;
        width: .6rem;
        height: .6rem;
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
    span {
        font-size: .16rem;
        color: #fff;
    }
`

const List = styled.div `
    padding-left: .2rem;
    background: #fff;
    margin-top: .1rem;
`

const ListItem = border(
    styled.div `
        height: .44rem;
        line-height: .44rem;
        text-indent: .1rem;
    `
)

export {
    Wrap,
    Header,
    Banner,
    List,
    ListItem,
}