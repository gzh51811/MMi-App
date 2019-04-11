import React, { Component } from 'react';
import './CartMain.css';
import { Icon, Checkbox, InputNumber } from 'antd';
import { withRouter } from "react-router-dom";
import withAxios from '../../hoc/withAxios';

class CartMain extends Component {
    constructor() {
        super();
        this.state = {
            cartlist: [],
            totalpri:[],//选择
            deltotal:[],//不选择
            delete:[],//删除
            all:[0]
        }
        this.gotoBack = this.gotoBack.bind(this);
        this.toSearch = this.toSearch.bind(this);
        this.delete = this.delete.bind(this);
        this.addORdel = this.addORdel.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    //初始化渲染
    async componentDidMount() {
        // console.log((localStorage.getItem('username')))
        if(localStorage.getItem('username')){
            let username = localStorage.getItem('username')
            let { data } = await this.props.axios.get('/cart', {
                params: {
                    username: username
                }
            })
            this.setState({
                cartlist: data
            });
        }else{
            alert('请先登录')
            this.props.history.push('/login')
        }
       
    }
    gotoBack() {
        this.props.history.goBack();
    }
    toSearch() {
        this.props.history.push('/search')
    }
    
    //数量增减
    async addORdel(item_id, username, value) {
        let { axios } = this.props;
        await axios.get('/changeNum', {
            params: {
                item_id: item_id,
                username: username,
                item_qty: value
            }
        }).then(data => {
            // console.log("增减", data, data.data[0].item_qty, data.data[0].item_id)
            let cartlist = this.state.cartlist;
            for (var i = 0; i < cartlist.length; i++) {
                   if(cartlist[i].item_id=== data.data[0].item_id){
                       cartlist[i].item_qty=data.data[0].item_qty
                       this.setState({
                        cartlist:cartlist
                    })
                   }
            }
        })


    }
    //单选框
    onChange(item_price, item_qty, e) {
        if(e.target.checked){

            // console.log(`checked = ${e.target.checked}`, item_price, item_qty,`${e.target.checked}`)
            let total = item_price*item_qty;
            // console.log(total)
            (this.state.totalpri).push(total)
            // console.log(this.state.totalpri)
            let all = 0;
            for(var i =0;i<this.state.totalpri.length;i++){
                all +=this.state.totalpri[i]
            }
            // console.log(all);
            this.setState({
                all:all
            })

        }else{
            let total = item_price*item_qty;
            // console.log("2",total);
            (this.state.deltotal).push(total)
            // console.log("2",this.state.totalpri)
            let all =this.state.all;
            let del = 0;
            for(var j =0;j<this.state.deltotal.length;j++){
                del +=this.state.deltotal[j]
            }
            // console.log("2",del);
            all = all-del;
            // console.log("2",all);
            this.setState({
                all:all
            })
        }
       

    }

    //删除
    async delete(item_id, username,item_price,item_qty) {
            let data = this.state.cartlist.filter(item => item.item_id !== item_id)
            this.setState({
                cartlist: data
            })
            let { axios } = this.props;
            await axios.get('/delcart', {
                params: {
                    item_id: item_id,
                    username: username
                }
            })
            let total = item_price*item_qty;
            // console.log("2",total);
            (this.state.delete).push(total)
            // console.log("2",this.state.totalpri)
            let all =this.state.all;
            let del = 0;
            for(var j =0;j<this.state.delete.length;j++){
                del +=this.state.delete[j]
            }
            // console.log("2",del);
            all = all-del;
            // console.log("2",all);
            this.setState({
                all:all
            })
    
        
       
    }
    render() {
        return (
            <div>
                <div>
                    <ul className="header">
                        <li className="headerli left" onClick={this.gotoBack}><Icon type="left" style={{ fontSize: "0.6rem" }} /></li>
                        <li className="headerli words">购物车</li>
                        <li className="headerli search" onClick={this.toSearch}><Icon type="search" style={{ fontSize: "0.6rem" }} /></li>
                    </ul>
                    <ul className="cartlist">
                        {
                            this.state.cartlist.map(item =>
                                <li key={item.item_id}>
                                    <p className="cartcheckbox"> <Checkbox onChange={this.onChange.bind(this, item.item_price, item.item_qty)}></Checkbox></p>
                                    <p className="cartimgbox">
                                        <img alt="" src={item.item_url} />
                                    </p>
                                    <div className="cartdec">
                                        <div className="carttitle">{item.item_name}</div>
                                        <div className="cartsale">
                                            售价：
                                        <span className="cartpri">{item.item_price}</span>
                                            元
                                    </div>
                                        <div className="cartinput">
                                            <InputNumber min={1} max={10} defaultValue={item.item_qty} onChange={this.addORdel.bind(this, item.item_id, item.username)} size={"small"} />
                                        </div>
                                    </div>
                                    <p className="cartdel" onClick={this.delete.bind(this, item.item_id, item.username,item.item_price,item.item_qty)}><Icon type="delete" style={{ fontSize: "0.48rem" }} /></p>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="cartfooter">
                    <ul>
                        <li className="cartallselect"><Checkbox onChange={this.onChange}></Checkbox>全选</li>
                        <li className="total">合计：
                                <span className="tubiao">￥</span>
                            <span className="totalpri">{this.state.all}</span>
                        </li>
                        <li className="pay">结算</li>
                    </ul>
                </div>
            </div>
        )
    }
}
CartMain = withAxios(CartMain);
CartMain = withRouter(CartMain);
export default CartMain;