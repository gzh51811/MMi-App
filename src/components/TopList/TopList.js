import React, { Component } from 'react';
import "./TopList.css";
import withAxios from '../../hoc/withAxios';
import {withRouter} from "react-router-dom";
import url from 'url';

class TopList extends Component {
    constructor() {
        super();
        this.state = {

            datalist: []
        }
        this.gotoGoods = this.gotoGoods.bind(this);
    }
    async componentDidMount() {
        let{location} = this.props;
        let {query} = url.parse(location.search,true)
        let { data } = await this.props.axios.get('/findType', {
            params: {
                type: query.type//this.$route.query.type
            }
        })
        // console.log(data);
        this.setState({
            datalist: data
        });
    }
    gotoGoods(id){
        console.log(this)
        let {history} = this.props;
        history.push({
            pathname:'/detail/' + id,
            search:'?id=' +id,
            state:{
                id
            }
        })
    }
    render() {
        return (
            <div className="toplist">
                <ul className="toplistul">
                    {
                            this.state.datalist.map(goods => 
                                <li className="toplistli" key={goods.id} onClick={this.gotoGoods.bind(this,goods.item_id)}>
                                <div className="toplistleft">
                                    <img className="toplistimg" src={goods.imgurl} alt="" />
                                </div>
                                <div className="toplistright">
                                    <p className="listtitle">{goods.name}</p>
                                    <p className="listdec">{goods.title}</p>
                                    <p className="listpri">
                                        <span style={{ color: "orangered" }}>￥</span>
                                        <span style={{ color: "orangered" }}>{goods.taocan[0].price}</span>
                                    </p>
                                </div>
                            </li>
                            )
                    }                  
                </ul>

            </div>
        )
    }
}
TopList = withAxios(TopList);
TopList = withRouter(TopList);
export default TopList;