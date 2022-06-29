import React, { Component } from 'react'

import HeaderAd from '@/top-ad/HeaderAd'

import {connect} from 'react-redux'

import { Carousel, WingBlank } from 'antd-mobile'

import Title from './Title'

import { changeTopVal } from '../actionCreator'

import {
    Header,
    ChangeBorder
} from './styled'

import './style.css'

import { NavLink , withRouter } from 'react-router-dom'


@connect(
    state => ({
        // topVal: state.home.topVal
        topVal: state.getIn(['home' , 'topVal'])
    }),
    dispatch => {
        return {
            changeTopVal (val) {
                dispatch(changeTopVal(val))
            }
        }
    }
)
@withRouter
class Wrap extends Component {

    state = {
        isShowNav : false,
        imgHeight: 128,
        stick: false,
        data: ['http://pic1.ymatou.com/G03/M00/7F/3F/CgzUIV7aK9-AW9aaAAOKXVjbcX4378_375_128_o.png','http://pic1.ymatou.com/G03/M09/3A/57/CgzUIV8P8cKAXAM_AAV9VRYjCEE729_375_128_o.png'],
    }

    async  componentDidMount () {
        // todo
        const map = document.querySelector('header').offsetTop
        this.props.changeTopVal(map)
        // 吸顶效果
        const root = document.getElementById('root')
        root.addEventListener('scroll' , () => {
            const _Top = root.scrollTop
            if (_Top > this.props.topVal && !this.state.stick || _Top < this.props.topVal && this.state.stick) {
                this.setState({
                    stick: !this.state.stick
                })
            }
            
        })
    }
    // 取消setState的使用
    componentWillUnmount () {
        this.setState = () => false
    }

    render() {
        return (
            <>
                {/* 顶部广告 */}
                <HeaderAd></HeaderAd>
                {/* 头部 */}
                <Header className={this.state.stick ? 'stick' : ''}>
                    <div className="logo">
                        {
                            this.props.history.location.pathname === '/' ? (
                                <img src="data:image/png;base64,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" alt=""/>
                            ) : (
                                <div className="nav">
                                    <NavLink to='/home'>
                                        <ChangeBorder 
                                            color={this.props.location.pathname === '/home' ? '#cc3333' : '#fff'}
                                            width='0 0 3px 0'
                                        >首页</ChangeBorder>
                                    </NavLink>
                                    <NavLink to='/community'>
                                        <ChangeBorder 
                                            color={this.props.location.pathname === '/community' ? '#cc3333' : '#fff'}
                                            width='0 0 3px 0'
                                        >社区</ChangeBorder>
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                    <div className="menu">
                        <NavLink to='/shopcar'>
                            <span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDBJREFUWAnNmMtPVHcUx2eGiRlJkSkQ2wKtVuqDxppKJ2pNcOGiaVx1xa4pCW8IETasmsjOSEJiAk0IISHddWNcuPIvECijSbWxVSxiCkVEoDzkNTB+vj/v3FzC3HEwcyee5Mw5v9c53985v8f9jb+uru62z+e7CPvi8fhLxK1QKHSlt7d3SnXZpgAgZnH6wuJ8ZO36+vpIfX39J9kGI39+p9OOjo68+fn5XwD5I/W/DgwMVDvbs6HvACSH7e3t+5eXlydRQyUlJQWdnZ1r2QCS8LELkBpYVzeJ0g+oEaIUJX1nKd+gnKd2D2gJm4ME4ErQxfgj1QcCgSOIqEufTFUz1/jHGPt5ampqwg3Qv/JGx08l+/v7hxGl0r2gxsbGk7FY7A/8tQRcHExY9Ydd2jNa3dfX9wCD/8NFSQH5/f5xy+PnGfXsYoyNIxy5sD8poHA4/FRjCeFhSa9pZmamBB/74ImkgLq6upaI0ix8xGswss/6Kbf8/JUUkBqJzj9wbnNzs3aAp4SfU3KAvO8KiOg8UafNzc1sROkb+cLnPVdAipA6QWVvhKe/AhTnUncHBNoxC8IXXkJpbW09wOTl40lPT89iqgiZlNHR0witrq5G8KErbAT2uQLi2shKhMBwzgAJBHQbuAPiuviP9hUrnOrrCbE0zsswfu5IukZIjZDSVtjW1hY2pQz/AMIPfwuoV9z092T+bYBM2sizJwu7paXlBBgK4GGuj9hbASV22vb2dsYB8c11jDOuXyAgfdcbCiaUZBJAjwmpDqyjydo5xT/Y2NgIB4NBpTQf4EZKt8pGMl5b+4Ak9frI+4iy7i/ZHuL8uS5dlBIQgx6rE9IGxNdjF45rqM4HTI7auYskXInxpi0hARGD78ODxcXFPYl0qVNKQDk5OWNyhiE7ZYA5iKEQY2eoX0AuUJbU90xCSreZI2SRcYtEUrxUWVk5V1VVtUWfvREO/eR6BdYzKSuUcpcxczDFx+CipqamD7OBKCUgC8CQ5NbWVrVV9lQkfQY5PTY0NHxJ/n8nSrlE7DfabiJNCpEB2owN1skuW7SZ1UybkUzKLqtOZa1Tvqn1DjS0y0iiwSnZWd9hXGfGIWd9hvSF0tLSQnbatuylBUgdrRftJVR9bpYRMY19Y4S1hm5mj3SSsW/11Zljly1di/Quj1H7HHIOfi/0tCPEY+40Z9JlZrbGrK4xq/F3mUFtbe1FxtVgZxq+yleF/n2xKS1A+muGNfQ3o8zbHkPPuJ2Pk/c9/RHBefY1kxnFjjnhkSNM7KyNBiWdba/cX6Cv/UcDRj+bnJz8ymkoHR0739MvAUZDzjDZIufYtACxRR8yyF60GF6F95wyxvzpdI4+zV0256xzonXW79BHR0efV1RU6OF4Gp4FYCO5j+7olEYhGo0+ikQieqGWa0LY+am7u3vCOfQ1FMOqWXI8tOIAAAAASUVORK5CYII=" alt=""/>
                            </span>
                        </NavLink>
                        <NavLink to='/home'>
                                {
                                    this.props.history.location.pathname === '/' && (
                                    <span>
                                        <img src="data:image/png;base64,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" alt=""/>
                                    </span>
                                    )
                                }
                            </NavLink>
                        <NavLink to='/mine'>
                        <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg==" alt=""/>
                        </span>
                    </NavLink>
                    </div>
                </Header>
                {/* 吸顶站位元素 */}
                <div className={this.state.stick ? 'show' : 'hidden'}></div>
                {/* 轮播 */}
                <div className="swiper">
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            autoplayInterval={2000}
                        >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                {/* 展示 */}
                <div className="limit-time">
                    <Title></Title>
                </div>
            </>
        )
    }
}

export default Wrap
