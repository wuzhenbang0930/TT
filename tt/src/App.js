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
import list from './components/list';
import index from './components/index';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="box">
        <footer>
            <NavLink to="/"><span className="iconfont icon-shouye"></span><p>首页</p></NavLink>
            <NavLink to="/list"><span className="iconfont icon-fenlei"></span><p>分类</p></NavLink>
            <a href=""><span className="iconfont icon-gouwucheman"></span><p>购物车</p></a>
            <a href=""><span className="iconfont icon-iconfontgerenzhongxin"></span><p>个人中心</p></a>
          </footer>
        <Route exact path="/" component={index} />
        <Route path="/list" component={list} />
        </div>
      </Router>
       
    );
  }
}

export default App;
