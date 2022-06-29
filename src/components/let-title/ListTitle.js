import Styled from 'styled-components'

const ListTitle = (Comp) => {
    return Styled(Comp) `
        height: .5rem;
        background: #f5f5f5;
        position: relative;
        i {
            height: .01rem;
            width:2.4rem;
            position absolute;
            background: #ccc;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin : auto;
        }
        i::before {
            content: '';
            position: absolute;
            width: .04rem;
            height: .04rem;
            border-radius: 50%;
            background: #ccc;
            top: -0.02rem;
        }
        i::after {
            content: '';
            position: absolute;
            width: .04rem;
            height: .04rem;
            border-radius: 50%;
            background: #ccc;
            top: -0.02rem;
            right: 0;
        }
        span {
            width: 1.14rem;
            height: .2rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #f5f5f5;
            padding: 0 ${props => props.padding || '0.1rem'};
            text-align: right; 
            color: #646464;
            font-size: .16rem;
            line-height: .2rem;
        }
        span::after {
            display: block;
            content: '';
            width: .19rem;
            height: .16rem;
            background: url(${props => props.url || 'https://s1.ymatou.com/homem/images/tag_xsq-d72323a492.png'});
            background-size: 100% 100%;
            position: absolute;
            top: .02rem;
        }
    `
}

export {
    ListTitle,
}