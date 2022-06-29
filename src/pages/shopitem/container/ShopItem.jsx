import React, { Component } from 'react'
import Index from '../ui/Index'
import connect from './connect'
import Pingjia from '../ui/Piingjia'
import ShopMsg from '../ui/ShopMsg'
import Seller from '../ui/Seller'
import IndexPay from '../ui/IndexPay'

@connect
export default class ShopItem extends Component {
    state = {
        pic:  [
            'http://pic1.ymatou.com/G03/shangou/M01/56/CF/CgzUIV62Gb-ATjwoAAJeo_yWo3Q243_827_800_n_w_o.jpg',
            'http://pic1.ymatou.com/G03/shangou/M01/56/CF/CgzUIV62GcCAYaScAAQ_gwo_qVY919_1_1_n_w_o.jpg',
            'http://pic1.ymatou.com/G03/shangou/M01/56/EE/CgzUIF62GcCAQS4HAARuXfaKAJ8318_1_1_n_w_o.jpg',
            'http://pic1.ymatou.com/G03/shangou/M02/56/EB/CgzUH162GcCALpf_AATFhjEejco998_1_1_n_w_o.jpg'
        ]
    }
    componentDidMount () {
        // let id = this.props.shopId
        // let id = this.props.location
        let id = this.props.location.search.substr(1)
        this.props.getProduct(id)
        this.props.getShopsNote(id)
    }
    // 获取商家详情
    seller = JSON.parse(document.cookie.split('=')[1])
    
    render() {
        return (
            <> 
                <Index 
                    product={this.props.product} 
                    pic={this.state.pic} 
                    sellerInfo={this.props.sellerIndex}
                    addCart={this.props.addCart}
                ></Index>
                <Pingjia note={this.props.note} ></Pingjia>
                <Seller seller={this.seller}></Seller>
                <div>
                    <img width='100%' src="https://s1.ymatou.com/itemm/static/img/zhengpin.855bfb9.png" alt=""/>
                </div>
                <ShopMsg product={this.props.product}></ShopMsg>
                <IndexPay addCart={this.props.addCart}></IndexPay>
            </>
        )
    }
}
