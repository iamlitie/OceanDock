import styled from 'styled-components'

const Header = styled.div `
    margin-bottom: .4rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    background: #fff;
    color: #646464;
    position: relative;
    span {
        display: block;
        position: absolute;
        width: .1rem;
        height: .1rem;
        border-width: 1px;
        border-style: solid;
        border-color: #9b9b9b #9b9b9b transparent transparent;
        transform: translate(0,-50%) rotate(-135deg);
        top: 53%;
        left: .2rem;
    }
`

const Input = styled.div `
    height: .38rem;
    width: 2.8rem;
    margin: 0 auto;
    background: #fff;
    margin-top: .1rem;
    input {
        width: 100%;
        height: 100%;
        border: 0;
        padding-left: .1rem;
    }
`

const Btn = styled.div `
    height: .38rem;
    width: 2.8rem;
    margin: 0 auto;
    line-height: .38rem;
    text-align: center;
    background: #c33;
    border-radius: .05rem;
    color: #fff;
    margin-top: .4rem;
`

export {
    Header,
    Input,
    Btn
}