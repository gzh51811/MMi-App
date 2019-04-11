import React, { Component } from 'react';
import './Likes.css';
import withAxios from '../../hoc/withAxios';
import {withRouter} from "react-router-dom";


class Likes extends Component{
    constructor(){
        super();
        this.state={
            likeslist:[]
        }
        this.gotoGoods = this.gotoGoods.bind(this);
    }
    async componentDidMount() {
        let { data } = await this.props.axios.get('/youlikes', {
            params: {
                item_id: ''
            }
        })
        // console.log(data);
        this.setState({
            likeslist: data
        });
    }
    gotoGoods(id){
        console.log(this)
        let {history} = this.props;
        history.push({
            pathname:'/detail/' + id,
            serch:'?id=' +id,
            state:{
                id
            }
        })
    }
    render(){
        return(
            <div>
                <div className="likesimg">
                    <img alt="" src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"/>
                </div>
                <ul className="likesul">
                    {
                        this.state.likeslist.map(goods=>
                            <li key={goods.item_id} onClick={this.gotoGoods.bind(this,goods.item_id)}>
                            <div className="likesliimg">
                                <img alt="" src={goods.item_url}/>
                            </div>
                            <p className="likeswords">{goods.item_name}</p>
                            <p>
                            <span className="likespri">￥{goods.item_price}</span>
                                {/* <span className="likesdis"><del>￥2798</del></span> */}
                            </p>
                        </li>
                        
                        )
                    }
                  
                </ul>
            </div>
        )
    }


}
Likes = withAxios(Likes);
Likes = withRouter(Likes);
export default Likes;