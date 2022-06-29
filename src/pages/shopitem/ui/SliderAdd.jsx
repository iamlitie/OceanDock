import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Slider , Pay } from './styled'
import { saveState , loadState } from 'utils/state'

const useStyles = makeStyles({
  list: {
    width: 'auto',
    height: 500,
  },
  fullList: {
    width: 'auto',
    height: 500,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // 数据
  const shopMsg = [
    {
      let: '102 BRICK-O-LA豆沙色 水润',
      pic: 'http://pic1.ymatou.com/G02/shangou/M0B/7E/0D/CgzUClz49SKAbBfmAAl54EyumLM075_757_685_n_w_o.jpg',
      price: '99'
    },
    {
      let: '108 DUBONNET牛血红 水润',
      pic: 'http://pic1.ymatou.com/G02/shangou/M0B/7E/0E/CgzUClz49TeAM0rBAAlr5QMHlEg408_743_673_n_w_o.jpg',
      price: '95'
    },
    {
      let: '207 DARE YOU红宝石 水润',
      pic: 'http://pic1.ymatou.com/G02/shangou/M07/41/94/CgzUC10ZxOGAM2VTAAn9J_YxNYM147_10_9_n_w_o.jpg',
      price: '99'
    },
    {
      let: '232 DOZEN CARNATIONS康乃馨 水润',
      pic: 'http://pic1.ymatou.com/G02/shangou/M07/62/2C/CgvUBVvlXl6APWIWAAI9EcyC314375_1_1_n_w_o.jpg',
      price: '99'
    }
  ]

  // 使用hook
  const [num , setNum] = React.useState(1)
  const [showMsg , setShowMsg] = React.useState({
    let: '',
    pic: '',
    price: ''
  })

  const handleClick = (index) => {
    // 使用hook
    setShowMsg(shopMsg[index])
  }
  
  const list = (anchor) => {
    return(
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <Slider>
              <div className='price'>
                  <div className="pic">
                      <img src={showMsg.pic === '' ? 'http://pic1.ymatou.com/G03/shangou/M05/D3/05/CgzUIV8H2-CAfjJCAAsE1st_QE8210_1_1_n_w_lb.jpg' : showMsg.pic} alt=""/>
                  </div>
                  <div className="shop-price">
                      <p>
                        ¥ <span>{showMsg.price === '' ? '38-89': showMsg.price}</span>
                      </p>
                      <p>库存充足</p>
                      <p>
                          <span>{showMsg.let === '' ? '请选择：': '已选择：'}</span>
                          <span>{showMsg.let === '' ? '颜色分类': showMsg.let}</span>
                      </p>
                  </div>
              </div>
              <div className="type">
                  <p>颜色分类</p>
                  <div className="options">
                      {
                        shopMsg.map((item , index) => {
                          return(
                            <span key={item.let} onClick={() => handleClick(index)}>{item.let}</span>
                          )
                        })
                      }
                  </div>
              </div>
              <div className="mount">
                  <span>购买数量</span>
                  <div>
                      <span onClick={() => {
                        if (num <= 1) {
                          return false
                        }
                        setNum(num - 1)
                      }}>-</span>
                      <span>{num}</span>
                      <span onClick={() => {
                        if (num >= 10) {
                          return false
                        }
                        setNum(num + 1)
                      }}>+</span>
                  </div>
              </div>
          </Slider>
          <Pay>
              <span onClick={() => {
                // 获取购买信息
                const shop = {
                  num,
                  ...showMsg
                }
                props.addCart(shop)
                // 获取localStore数据
                const data = loadState('OceanDockAddCart')||[]
                const shops = [...data]
                const res = [...shops , shop]
                // 去重
                for (var i = 0 ; i < res.length ; i ++) {
                  for (var j = 0 ; j < res.length ; j ++) {
                    if(res[i].let === res[j].let && i !== j) {
                      // 计算商品数量
                      res[i].num = res[i].num + res[j].num
                      res.splice(j , 1)
                    }
                  }
                }
                // 保存localStore数据
                saveState('OceanDockAddCart' , res)
                setState({ ...state, bottom: false });
              }}
              >加入购物车</span>
              <span>立即购买</span>
          </Pay>
        </List>
      </div>
    )
  };

  return (
    <>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)} className="shopmsg">
            <span>加入购物车</span>
          </div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
