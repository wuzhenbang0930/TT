import React, { Component } from 'react';
import axios from "axios";
import dd from '../img/2.png'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import '../style/gouwuche.css';


export default class gouwuche extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div id="box1">
				<h1 className="gwheader">购物车</h1>
				<div className="gwmain">
					<div className="gwno">
						<span></span>
						<p>购物车暂时没有商品</p>
						<p>添加到购物车的商品会显示到这里</p>
						<a>现在选购</a>
					</div>
				</div>
				<footer>
            <NavLink to="/"><span className="iconfont icon-shouye"></span><p>首页</p></NavLink>
            <NavLink to="/list"><span className="iconfont icon-fenlei"></span><p>分类</p></NavLink>
            <NavLink to="/gouwuche"><span className="iconfont icon-gouwucheman"></span><p>购物车</p></NavLink>
            <NavLink to="/my"><span className="iconfont icon-iconfontgerenzhongxin"></span><p>个人中心</p></NavLink>
          </footer>
			</div>
		)
	}
}