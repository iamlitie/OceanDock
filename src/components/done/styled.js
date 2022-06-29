import styled from 'styled-components'

const Wrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DoneList = styled.div `
    width: 1.8rem;
    height: .4rem;
    background: #679fef;
    text-align: center;
    line-height: .4rem;
    color: #fff;
    border-radius: .2rem;
    margin: .15rem 0;
`

export {
    Wrap,
    DoneList
}