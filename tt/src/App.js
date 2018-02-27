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
    this.getaxios = this.getaxios.bind(this);
    this.state = {
      data: [],
      plus:[],
      imgHeight: 176,
      slideIndex: 0,
      smallpic : [],
      floor1:{},
      floor2:[],
      floor3:["https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_972/format,webp","https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png?x-oss-process=image/resize,w_972/format,webp"],
      floor3text:[],
      floor4:[],
      floor5:[],
      floor5id:[],
      floor5id1:[],
      floor7:[],
      floor7id:[],
      floor7id1:[]
    }
  }


 getaxios(id){
  axios.get(`/product/skus?ids=${id}`).then((res)=>{
    console.log(res)
    var data = [];
    if(id.length === 4){
      this.setState({
        floor5id1:res.data.data.list
       })
    }else if(id.length === 8){
      this.setState({
        floor7id1:res.data.data.list
       })
    }
 
   console.log(this.state.floor7id1)
  })
}
componentWillMount(){
  axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json").then((res)=>{
    // console.log(res.data.floors[1].dataList)
    this.setState({
      data : res.data.banner.dataList,
      smallpic : res.data.shortcut.dataList,
      floor1 : res.data.floors[0],
      floor2 : res.data.floors[1].dataList,
      floor3text:res.data.floors[2],
      floor4:res.data.floors[3].dataList,
      floor5:res.data.floors[4],
      floor5id : res.data.floors[4].dataList.recommend,
      floor7: res.data.floors[6],
      floor7id :  res.data.floors[6].dataList

    })
  // console.log(res.data.floors[4].dataList.recommend)
  // console.log()
    this.getaxios(this.state.floor5id)
    this.getaxios(this.state.floor7id)
    
  });
}
  componentDidMount(){
   
    axios.get("/product/skus?ids=100035101,100033802,100027303,100037603,100036302,100038001,100035202,100027004,100033913,100027401,100032501,100025101,100035101,100027305,100033802,100036304,100036501,100036401,100035705,100035101,100036003,100038001,100035202,100038101,100035803,100037801,100027004,100027303,100027101,100027401,100027004,100029001,100029801,100027501,100030901,100030701,100030501,100029701,100029601,100029501,100029301,100029201,100029101,100028901,100028801,100037711,100033907,100033303,100025101,100032901,100025602,100032401,100032701,100032501,100023001,100022901,100032601,100022201,100032201").then((res)=>{
      // console.log(res.data.data.list[0].shop_info)
      this.setState({
        plus : res.data.data.list
      })
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

            <div className="hot">
                <h3>{this.state.floor1.floorName}</h3>
                <ul>
                  <li>
                    <a href="">
                      <img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_363/format,webp" alt=""/>
                      </a>
                      <div className="zi">
                        <h4>坚果 Pro2</h4>
                        <p>漂亮的不像实力派</p>
                        <span>￥
                          1799,00</span>
                      </div>
                  </li>
                  <li>
                    <a href="">
                      <img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_363/format,webp" alt=""/>
                      </a>
                      <div className="zi">
                        <h4>坚果 Pro2</h4>
                        <p>漂亮的不像实力派</p>
                        <span>￥
                          1799,00</span>
                      </div>
                  </li>
                  <li>
                    <a href="">
                      <img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_363/format,webp" alt=""/>
                      </a>
                      <div className="zi">
                        <h4>坚果 Pro2</h4>
                        <p>漂亮的不像实力派</p>
                        <span>￥
                          1799,00</span>
                      </div>
                  </li>
                  <li>
                    <a href="">
                      <img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_363/format,webp" alt=""/>
                      </a>
                      <div className="zi">
                        <h4>坚果 Pro2</h4>
                        <p>漂亮的不像实力派</p>
                        <span>￥
                          1799,00</span>
                      </div>
                  </li>
                </ul>
            </div>


            <div className="floor2">
                <ul>
                  {
                    this.state.floor2.map((item,index)=>{
                      return(
                        <li key={index}>
                        <img src={item.src} alt=""/></li>
                      )
                    })
                  }
                </ul>
            </div>


            <div className="floor3">
            <h3>{this.state.floor3text.floorName}</h3>
            <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
        >
          {this.state.floor3.map(val => (
            <a key={val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img src={val} alt="" style={{ width: '100%', verticalAlign: 'top' }} onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
              }}/>
              <div className="zi">
                <h4>坚果 Pro2</h4>
                <p>漂亮的不像实力派</p>
                <span>￥
                  1799,00</span>
             </div>
            </a>
            
          ))
          
          } 
             
        </Carousel>
       
            </div>


            <div className="floor4">
               {
                 this.state.floor4.map((item, index)=>{
                   return(
                     <img src={item.src} alt="" key={index}/>
                   )
                 })
               }
            </div>
            <div className="floor5">
              <h3>{this.state.floor5.floorName}</h3>
              {
                this.state.plus.map((item,index)=>{
                  if(item.id == "100033802"){
                    return(
                      <a href="" key={item.id}>
                      <img src={item.shop_info.ali_image} alt=""/>
                      <div className="zi">
                      <h4>{item.shop_info.title}</h4>
                      <p>{item.shop_info.sub_title}</p>
                      <span>￥{item.price}</span>
                   </div>
                   </a>
                      
                    )
                  }
                })
              }
              <div className="fl5list">
                  {
                    this.state.floor5id1.map((item,index)=>{
                      return(
                        <div className="fl5small" key={item.id}>
                          <img src={item.shop_info.ali_image} alt=""/>
                          <span>{item.name}</span>
                        </div>
                      )
                    })

                  }
              </div>
            </div>
            <div className="floor6">
                  <h3>{this.state.floor7.floorName}</h3>
                  <div className="fl6main">
                    <ul>
                      {
                        // console.log(this.state.floor7id1)
                        this.state.floor7id1.map((item,index)=>{
                            return(
                              <li key={item.id}>
                                <a href="">
                                  <img src={item.shop_info.ali_image} alt=""/>
                                </a>
                                <div className="zi">
                      <h4>{item.shop_info.title}</h4>
                      <p>{item.shop_info.sub_title}</p>
                      <span>￥{item.price}</span>
                   </div>
                              </li>
                            )
                        })
                      }
                    </ul>
                  </div>
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
