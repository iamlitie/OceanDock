import React , {useState , useEffect} from 'react'
import { 
    Wrap ,
    Header,
    ShopCar,
    PayBar
} from './styled'
import { NavLink } from 'react-router-dom'
import { loadState , saveState } from 'utils/state'

export default function ShopCarUi() {
    // 获取商品数据
    let shops = loadState('OceanDockAddCart') || []

    // 定义保存hook数据和方法的数组
    let arr = []
    let arrFun = []
    for (var i = 0 ; i < shops.length ; i ++) {
        var [count , setCount] = useState(shops[i].num)
        // 将每一个hook的状态和方法放进数组中 以便后面调用
        arr.push(count)
        arrFun.push(setCount)
    }

    // 选择按钮
    let chooseArr = []
    const chooseFun = []
    for (var i = 0 ; i < shops.length ; i ++) {
        const [a , setA] = useState(false)
        chooseArr.push(a)
        chooseFun.push(setA)
    }
    // 检测全选 
    let res = chooseArr.every(item => item === true) 
    
    // 记数 总价
    // 不需要使用hook做响应式 因为点击选择按钮以后会重新渲染 在这里只需读取值
    let allPrice = 0
    let payCount = 0
    chooseArr.map((item , index) => {
        if(item) {
            // 记数
            payCount ++
            // 计算总价
            allPrice += shops[index].num * shops[index].price
        }
    })

    // 初始化总价
    
    // 计算总价 一旦依赖于某个值的变化而变化 就不需要用useState
    // allPrice = arr.reduce((val , item , index) => {
    //     chooseArr.map(item => {
    //     if(chooseArr[index]) {
    //         return val + shops[index].num * shops[index].price
    //     }
    //     })
    //     return 0
    // } , 0)

    return (
        <Wrap>
            <Header>
                <span>购物车 ({shops.length})</span>
                <div className="btn">
                    <NavLink to='/home'><span>
                        <img src="data:image/png;base64,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" alt=""/>    
                    </span></NavLink>
                    <NavLink to='/mine'><span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg==" alt=""/>    
                    </span></NavLink>
                </div>
                <div className="let">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>
            </Header>
            <ShopCar>
                {
                    shops && shops.map((item , index) => {
                        return(
                            <div className="shops" key={item.let}>
                                <div className="btn">
                                    <span 
                                        // className={isChoose[index] ? 'active' : null} 
                                        className={chooseArr[index] ? 'active' : null} 
                                        // className={'active'} 
                                        onClick={() => {
                                            chooseFun[index](a => !a)
                                            // setIsChoose(isChoose => {
                                            //     isChoose[index] = !isChoose[index]
                                            //     // 需要返回一个新的地址 不然不会响应式
                                            //     return [...isChoose]
                                            // })   
                                        }}
                                    ></span>
                                </div>
                                <div className="main">
                                    <img src={item.pic} alt=""/>
                                    <div>
                                        <p>
                                            <span>包邮包税</span>
                                            韩国正品LG润膏洗发水护发素二合一 持久滋润修复滋养香水润发膏
                                        </p>
                                        <p>颜色分类:{item.let}</p>
                                    </div>
                                </div>
                                <div className="count">
                                    <span>¥{item.price}</span>
                                    <div>
                                        <span onClick={() => {
                                            if (arr[index] === 1) {
                                                return false
                                            }
                                            arrFun[index](count => count - 1)
                                            // 保存localStore
                                            shops[index].num --
                                            saveState('OceanDockAddCart' , shops)
                                        }}>-</span>
                                        <span>{arr[index]}</span>
                                        <span onClick={() => {
                                            arrFun[index](count => count + 1)
                                            // 保存localStore
                                            shops[index].num ++
                                            saveState('OceanDockAddCart' , shops)
                                        }}>+</span>
                                    </div>
                                    <i onClick={() => {
                                        shops.splice(index , 1)
                                        saveState('OceanDockAddCart' , shops)
                                        location.reload()
                                    }}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </ShopCar>
            <PayBar>
                <div>
                    <span 
                        className={res ? 'active' : null} 
                        onClick={() => {
                            // 先判断是否是全选状态
                            if (res) {
                                for (var i = 0 ; i < chooseArr.length; i ++) {
                                    chooseFun[i](false)
                                }
                                return false
                            }
                            // 如果不是
                            for (var i = 0 ; i < chooseArr.length ; i ++) {
                                // 再判断是否为选中 如果没有选中改为选中 选中不做操作
                                if (!chooseArr[i]) chooseFun[i](a => !a)
                            }
                        }}
                    ></span>
                    全选
                </div>
                <div>
                    <p>
                        总价: <span>¥{allPrice}</span>
                    </p>
                    <p>(不含运费)</p>
                </div>
                <div>
                    去结算({res ? chooseArr.length : payCount})
                </div>
            </PayBar>
        </Wrap>
    )
}
