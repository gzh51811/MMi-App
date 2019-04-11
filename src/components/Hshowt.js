
// 首页中带边框的商品渲染
import './CSS/Hshowt.scss';

import React,{Component} from 'react';

// 引入高阶组件
import withAxios from '../hoc/withAxios';

class Hshowt extends Component{
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
            homegoods : data.splice(0,18)
        })
    }

    // componentDidMount(){
    //     // 列表背景颜色渲染
    //     let color = this.props.data1;
    //     let type = this.props.data;
    //     console.log('555:',color,type);

    //     var HshowtLi = document.getElementsByClassName('HshowtLi');
    //     if(type === 'phone'){
    //         HshowtLi.style.backgroundColor = 'yellow';
    //     }
    //     else if(type === 'zhineng'){
    //         HshowtLi.style.backgroundColor = 'red';
    //     }
    // }

    render(){
        let {homegoods} = this.state;
        // let color = this.props.data1;
        // let type = this.props.data;
    
        return (
            <div id="Hshowt" style={{'position':'relative', 'top':'-5px', 'left':0}}>
                <ul className="HshowtUL">
                {
                    homegoods.map((item)=>
                        <li className="HshowtLi" style={{'backgroundColor':'yellow'}} key={item.item_id}>
                            <img className="HshowtLi-img" src={item.imgurl} alt=""/>
                            <div className="HshowtLi-div">
                                <p className="Hdiv-p">{item.name}</p>
                                <p className="Hdiv-p">{item.title}</p>
                                <p className="Hdiv-p">￥{item.taocan[0].price}</p>
                                <span className="Hdiv-btn">立即购买</span>
                            </div>
                        </li>
                    )
                }
                </ul>
            </div>
        )
    }
}

Hshowt = withAxios(Hshowt);

export default Hshowt;
