import React, {Component} from 'react';
import '../style/list.css'
import axios from "axios";
import {
	BrowserRouter as Router,
	Route,
	NavLink
  } from 'react-router-dom';

export default class list extends Component {
	constructor(...props){
		super(...props);
		this.geta = this.geta.bind(this)
		this.state={
			listfl1 : [],
			listfl1small :[],
			listfl2small : [],
			phone : [],
			kongqi : [],
			ketaomo : [],
			chongdian : [],
			erji : [],
			fuzhuang : [],
			book : [],
			wenju :[],
			touying : [],
			phone1 : [],
			kongqi1 : [],
			ketaomo1 : [],
			chongdian1 : [],
			erji1 : [],
			fuzhuang1 : [],
			book1 : [],
			wenju1 :[],
			touying1 : []

		}
		

	}
	componentWillMount(){
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json").then((res)=>{
			
			this.setState({
				listfl1 : res.data
			})
			console.log(this.state.listfl1)
		})	
		setTimeout(()=>{
			this.state.listfl1.map((item,index)=>{
				this.state.listfl1small.push(item)
				this.setState({
					listfl1small: this.state.listfl1small
				})
				
			})
			this.state.listfl1small.map((item,index)=>{
					this.state.listfl2small.push(item)
					this.setState({
						listfl2small : this.state.listfl2small
					})
			})
			this.geta();
		},300)
		
		
	}
	
	componentDidMount(){
		
		
		
		
	}
	geta(){
		this.state.listfl2small.map((item,index)=>{
			if(item.name == "手机"){
				this.setState({
					phone:item.layout.dataList
				})
				this.state.phone.map((item,index)=>{
					this.state.phone1.push(item.sku)
					this.setState({
						phone1:this.state.phone1
					})
				})
				axios.get(`product/skus?ids=${this.state.phone1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						phone1:res.data.data.list
					})
				})
				console.log(this.state.phone1)
				
			}else if(item.name == "空气净化"){
				this.setState({
					kongqi : item.layout.dataList
				})
				this.state.kongqi.map((item,index)=>{
					this.state.kongqi1.push(item.sku)
					this.setState({
						kongqi1:this.state.kongqi1
					})
				})
				axios.get(`product/skus?ids=${this.state.kongqi1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						kongqi1:res.data.data.list
					})
				})
			}else if(item.name == "壳套膜"){
				this.setState({
					ketaomo : item.layout.dataList
				})
				this.state.ketaomo.map((item,index)=>{
					this.state.ketaomo1.push(item.sku)
					this.setState({
						ketaomo1:this.state.ketaomo1
					})
				})
				axios.get(`product/skus?ids=${this.state.ketaomo1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						ketaomo1:res.data.data.list
					})
				})
			}else if(item.name == "充电线材"){
				this.setState({
					chongdian : item.layout.dataList
				})
				this.state.chongdian.map((item,index)=>{
					this.state.chongdian1.push(item.sku)
					this.setState({
						chongdian1:this.state.chongdian1
					})
				})
				axios.get(`product/skus?ids=${this.state.chongdian1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						chongdian1:res.data.data.list
					})
				})
			}else if(item.name == "耳机"){
				this.setState({
					erji : item.layout.dataList
				})
				this.state.erji.map((item,index)=>{
					this.state.erji1.push(item.sku)
					this.setState({
						erji1:this.state.erji1
					})
				})
				axios.get(`product/skus?ids=${this.state.erji1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						erji1:res.data.data.list
					})
				})
			}else if(item.name == "服装"){
				this.setState({
					fuzhuang : item.layout.dataList
				})
				this.state.fuzhuang.map((item,index)=>{
					this.state.fuzhuang1.push(item.sku)
					this.setState({
						fuzhuang1:this.state.fuzhuang1
					})
				})
				axios.get(`product/skus?ids=${this.state.fuzhuang1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						fuzhuang1:res.data.data.list
					})
				})
			}else if(item.name == "图书"){
				this.setState({
					book : item.layout.dataList
				})
				this.state.book.map((item,index)=>{
					this.state.book1.push(item.sku)
					this.setState({
						book1:this.state.book1
					})
				})
				axios.get(`product/skus?ids=${this.state.book1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						book1:res.data.data.list
					})
				})
			}else if(item.name == "文具"){
				this.setState({
					wenju : item.layout.dataList
				})
				this.state.wenju.map((item,index)=>{
					this.state.wenju1.push(item.sku)
					this.setState({
						wenju1:this.state.wenju1
					})
				})
				axios.get(`product/skus?ids=${this.state.wenju1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						wenju1:res.data.data.list
					})
				})
			}else if(item.name == "投影仪"){
				this.setState({
					touying : item.layout.dataList
				})
				this.state.touying.map((item,index)=>{
					this.state.touying1.push(item.sku)
					this.setState({
						touying1:this.state.touying1
					})
				})
				axios.get(`product/skus?ids=${this.state.touying1}`).then((res)=>{
					console.log(res.data.data.list)
					this.setState({
						touying1:res.data.data.list
					})
				})
			}
			
			
		})
		// axios.get(`product/skus?ids=${this.state.phone1}`).then((res)=>{
		// 	console.log(res.data.data.list)
		// })
		console.log(this.state)
	}
	render() {
		return (
			<div id="box1">
				 <header>
					<a className="iconfont icon-ego-menu"></a>
					<a>分类</a>
					<a></a>
          		</header>
				  <div className="listmain">
					<ul>
							{
								
								this.state.listfl1.map((item,index)=>{
									
										return(
											<li key={item.name}>
												<h3>{item.name}</h3>
												<a href="">
												<img src={item.image.src} alt=""/></a>
												{/* {
													this.state.touying1.map((item1,index1)=>{
														console.log(item)
														return(
															<img src={item.image.src} alt="" key={index}/>
														)
													})
												} */}
											</li>
											
											
										)
											
										
									
								})
								
							}
						
					</ul>
					

				  </div>
			</div>
		)
	}
}