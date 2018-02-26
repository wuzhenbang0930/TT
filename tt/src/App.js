import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import './style/iconfont.css';
import axios from "axios";
import { Button } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [],
      imgHeight: 176,
      slideIndex: 0,
      smallpic : []
    }
  }
 
  componentDidMount(){
    axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json").then((res)=>{
      console.log(res.data.banner.dataList)
      this.setState({
        data : res.data.banner.dataList,
        smallpic : res.data.shortcut.dataList
      })
      console.log(this.state)
      
    });
    axios.get("/product/promotions?with_num=true").then((res)=>{
      console.log(res)
    });
    
  }
  render() {
    return (
      
      <Router>
        <div id="box">
          <header>
            <a className="iconfont icon-ego-menu"></a>
            <a className="iconfont icon-chuizi"></a>
            <a></a>
          </header>
          <main>
            <div className="lunbo">
            <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
          
        >
          {this.state.data.map((item,index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
            </div>
            <div className="smallpic">
              <ul>
                {
                  this.state.smallpic.map((item,index)=>{
                    return(
                      <li key={item.labelTitle}>
                          <a href="">
                            <img src={item.src} alt=""/>
                            <span>{item.labelTitle}</span>
                          </a>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
          </main>
          <footer>
            <a href=""><span className="iconfont icon-shouye"></span><p>首页</p></a>
            <a href=""><span className="iconfont icon-fenlei"></span><p>分类</p></a>
            <a href=""><span className="iconfont icon-gouwucheman"></span><p>购物车</p></a>
            <a href=""><span className="iconfont icon-iconfontgerenzhongxin"></span><p>个人中心</p></a>
          </footer>
        </div>
      </Router>
       
    );
  }
}

export default App;
