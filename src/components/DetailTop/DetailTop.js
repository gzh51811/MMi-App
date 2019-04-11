import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import './DetailTop.css';
import url from 'url';
import withAxios from '../../hoc/withAxios';
import {withRouter} from "react-router-dom";

class DetailTop extends Component {
    constructor(){
        super();
        this.state={
            details:[]
        }
        this.gotoBack = this.gotoBack.bind(this)
        this.gotoHome = this.gotoHome.bind(this)
        this.gotoCart = this.gotoCart.bind(this)
        this.addtoCart=this.addtoCart.bind(this)

    }
    //回退
    gotoBack(){
        this.props.history.goBack();
    }
    //回首页
    gotoHome(){
        this.props.history.push('/home')
    }
    //去购物车页
    gotoCart(){
        this.props.history.push('/cart') 
    }
    //轮播图
    onChange() {
        console.log()
    }
    //加入购物车
    async addtoCart(){
        let username = "duan";
        console.log(this.state.details[0],username)
        let {axios} = this.props;
        let {item_id,imgurl,name,qty} = this.state.details[0];
        let {price} = this.state.details[0].taocan[0];
        console.log(item_id,imgurl, username,name,qty,price)
       await axios.get('/addCart',{
           params:{
            item_id: item_id,
            username:username,
            item_url:imgurl,
            item_name:name,
            item_price:price,
            item_qty:qty
           }
       }).then(res=>{
        if(res===1){
            alert('成功加入购物车')
           }
       })
      
      
    }
    async componentDidMount() {
        // console.log(this)
        let{location} = this.props;
        let {query} = url.parse(location.search,true)
        // console.log("query",query)
        let { data } = await this.props.axios.get('/likes', {
            params: {
                item_id: query.id
            }
        })
        // console.log("data",data);
        this.setState({
            details: data
        });
    }
    render() {
        return (
            <div className="DetailTop">
                    {
                        this.state.details.map(goods=>
                            <div  key={goods.item_id}>
                                <Carousel afterChange={this.onChange} key={goods.item_id}>
                                    <div className="lunbotu"><h3 className="lunbotu"><img className="lunbotu dtimg" alt="" src={goods.url1}/></h3></div>
                                    <div className="lunbotu"><h3 className="lunbotu"><img alt="" className="lunbotu dtimg" src={goods.url2}/></h3></div>
                                </Carousel>
                                <div className="discbox" ><img alt="" className="discbox" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/508672abae72a8d240eeb93cefe978f8.jpg"/></div>
                                <div className="detail" key={goods.name}>
                                    <h4 className="detailTitle">{goods.name}</h4>
                                    <p className="detailDec">{goods.title}</p>
                                    <p className="detailPrice">￥{goods.taocan[0].price}</p>
                                </div>
                            </div>
                        )
                    }
                    <div className="Topicon">
                        <div className="iconleft iconstyle" onClick={this.gotoBack}><Icon type="left" /></div>
                        <div className="iconshare iconstyle"><Icon type="share-alt" /></div>
                    </div>

                    <div className="Dfooter">
                        <div  className="Dfooterall">
                            <div className="DfooterLeft Dfootericon" onClick={this.gotoHome}>
                                <span><Icon type="home" style={{fontSize:"0.48rem"}} /></span>
                                <span>首页</span>
                            </div>
                            <div className="Dfooterright Dfootericon" onClick={this.gotoCart}> 
                                <span><Icon type="shopping-cart" style={{fontSize:"0.48rem"}} /></span>
                                <span>购物车</span>
                            </div>
                        </div>
                        <div className="addcart" onClick={this.addtoCart}>
                            加入购物车
                        </div>
                    </div>
            </div>
        )
    }
}
DetailTop = withAxios(DetailTop);
DetailTop = withRouter(DetailTop);
export default DetailTop;