
// 首页中不带边框的商品渲染
import './CSS/Hshowf.scss';

import React,{Component} from 'react';

// 引入高阶组件
import withAxios from '../hoc/withAxios';

class Hshowf extends Component{
    constructor(){
        super();
        this.state = {
            homegoods : []
        }
    }

    async componentWillMount(){
        var type = this.props.data;
        var {axios} = this.props;

        let {data} = await axios.get('/Tabs',{
            params : {
                type : type
            }
        })

        this.setState({
            homegoods : data.splice(0,20)
        })
    }

    render(){
        let {homegoods} = this.state;
        return (
            <div id="Hshowf" style={{'position':'relative', 'top':'-5px', 'left':0}}>
                <ul className="HomeUL">
                    {
                        homegoods.map((item)=>
                            <li className="HomeLi" key={item.item_id}>
                                <img className="HomeLi-img" src={item.imgurl} alt=""/>
                                <p className="HomeLi-p1" style={{width:'4.266667rem'}}>{item.name}</p>
                                <p className="HomeLi-p2" style={{width:'4.266667rem'}}>{item.title}</p>
                                <p className="HomeLi-p3" style={{width:'4.266667rem'}}>
                                    <span className="p-span1">￥2999</span>
                                    <span className="p-span2">&nbsp;&nbsp;<del>￥3288</del></span>
                                </p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

Hshowf = withAxios(Hshowf);

export default Hshowf;