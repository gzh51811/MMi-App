import React,{Component} from 'react';

// 引入样式
import './Home.scss';

import {Icon} from 'antd'; 

// 引入各个组件
import HTabs from '../../Components/HTabs';
import HTotop from '../../Components/HTotop';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            styles : []
        }
    }

    componentDidMount(){
        // 点击回到顶部
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        console.log(window.scrollY);
    }

    render(){
        return (
            <div id="Home">
                <div className="Header">
                    <span className="sp"><Icon type="smile" style={{fontSize:".773333rem", color:'#666'}}/></span>
                    <input className="inp" placeholder="搜索商品名称"/>
                    <span className="sp"><Icon type={'user-add'} style={{fontSize:".773333rem", color:'#666'}}/></span>
                </div>

                <div className="Home2">
                    <HTabs/>
                    <HTotop/>
                </div>
            </div>
        )
    }
}


export default Home;