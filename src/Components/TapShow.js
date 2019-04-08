
// 分类页商品数据渲染的组件
import './CSS/TapShow.scss';

import React,{Component} from 'react';

import { Icon } from 'antd';

// 引入高阶组件Axios
import withAxios from '../hoc/withAxios';

class TapShow extends Component {
    constructor(){
        super();
        this.state = {
            ShowList : []
        }
    }

    // 根据父组件传过来的data，请求对应数据
    async componentWillMount(){
        let name = this.props.data;
        let {axios} = this.props;
        let {data} = await axios.get('/Tabright',{
            params : {
                style : name
            }
        })

        this.setState({
            ShowList : data
        })
    }

    render(){
        let {data} = this.props;
        
        return (
            <div id="TapShow">
                <div className="TapShow-name">
                    <Icon type="minus" style={{'color':'#e0e0e0'}}/> &nbsp;&nbsp;
                    <span>{data}</span> &nbsp;&nbsp;
                    <Icon type="minus" style={{'color':'#e0e0e0'}}/>
                </div>

                <div className="TapShow-goods">
                    <ul className="goods-ul">
                    {
                        this.state.ShowList.map(item => 
                            <li className="goods-li" key={item.item_id}>
                                <img src={item.imgurl} alt=""/>
                                <p>{item.name}</p>
                            </li>    
                        )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

TapShow = withAxios(TapShow);

export default TapShow;