import React, { Component } from 'react';
import '../style/my.css'
import {
	BrowserRouter as Router,
	Route,
	NavLink
  } from 'react-router-dom';
  import '../style/iconfont.css';

export default class my extends Component {
	render() {
		return (
			<div id="box1">
				<h1 className="gwheader">个人中心</h1>
				<div className="mymain">
					<div className="myimg">
						<span className="iconfont icon-chuizi"></span>
						<span>123123123</span>
					</div>
					<ul>
						<li><span className="iconfont icon-dingdan"></span> <i>订单</i>  </li>
						<li><span className="iconfont icon-fukuan"></span> <i>订单</i>     </li>
						<li><span className="iconfont icon-daishouhuo"></span> <i>订单</i>     </li>
						<li> <span className="iconfont icon-tiexinshouhou"></span> <i>订单</i>    </li>
					</ul>
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