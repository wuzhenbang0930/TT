import React, { Component } from 'react';
import '../style/iconfont.css';
import '../style/commit.css';
import axios from "axios";

import { NavBar} from 'antd-mobile';

export default class gouwuche extends Component {
	constructor(props){
		super(props)
		this.state = {
			commit : []
		}
	}
	componentDidMount(){
		console.log()
		axios.get(`/product/spus?ids=${this.props.match.params.fid}`).then((res)=>{
			console.log(res.data.data.list)
			this.setState({
				commit : res.data.data.list,
			
			})
		
		})
	}
	render() {
		return (
			<div id="box1">
			
				{
					this.state.commit.map((item,index)=>{
						console.log(item)
						return(
						<div id="box1" key={item.id}>
							<NavBar
							mode="dark"
							leftContent="返回"
						  >{item.name}</NavBar>
						  
									  <div className="commitmain">
										  <ul>
											  <li>商品</li>
											  <li>详情</li>
											  <li>参数</li>
											  <li>推荐</li>
										  </ul>
										  <div className="commitfl2">
												<img src={item.sku_info[0].ali_image} alt=""/>
										  </div>
										  <div className="commitfl3">
										  <h3>商品信息</h3>
											  <div className="commitfl3zi">
											  <h4>{item.product_info.product_name}</h4>
											  <p>{item.shop_info.spu_sub_title}</p>
											  <span>￥<i>{item.price}.00</i></span><span>123</span>
											  </div>
										  </div>
										  <div className="commitfl4">
										  	<img src={item.shop_info.tpl_content.base.images.ali_mobile.url} alt=""/>
										  </div>
									  </div>	
									  </div> 
									 
						)
					})
				}
				 <div className="commitfooter">
										  <ul>
											  <li><img src="./src/img/2.png" alt=""/></li>
											  <li>加入购物车</li>
											  <li>现在购买</li>
										  </ul>
									  </div>
			</div>
		)
	}
}