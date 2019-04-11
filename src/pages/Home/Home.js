import React,{Component} from 'react';

// 引入样式
import './Home.scss';

import {Icon} from 'antd'; 

import {withRouter} from 'react-router'

// 引入各个组件
import HTabs from '../../components/HTabs';
import HTotop from '../../components/HTotop';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            styles : []
        }

        this.GoMine = this.GoMine.bind(this);
    }

    // componentDidMount(){
    //     // 监听滚轮事件
    //     window.onscroll = function(){
    //         var Tscroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            
    //         // 回到顶部
    //         var sTop = this.refs.toTop;
    //         if(sTop){
    //             if(Tscroll > 500){
    //                 sTop.style.opacity = 1;
    //             }else{
    //                 sTop.style.opacity = 0;
    //             }
    //         }
    //     }
        
    // }


    // 点击跳转到我的
    GoMine(){
        let {history} = this.props;
        history.push('/mine');
    }

    render(){
        return (
            <div id="Home">
                <div className="Header">
                    <span className="sp"><Icon type="smile" style={{fontSize:".773333rem", color:'#666'}}/></span>
                    <input className="inp" placeholder="搜索商品名称"/>
                    <span className="sp" onClick={this.GoMine}><Icon type={'user-add'} style={{fontSize:".773333rem", color:'#666'}}/></span>
                </div>

                <div className="Home2">
                    <HTabs ref="toTop"/>
                    <HTotop/>
                </div>
            </div>
        )
    }
}

Home = withRouter(Home);

export default Home;