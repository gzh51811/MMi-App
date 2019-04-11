
// 首页点击回到顶部组件
import './CSS/HTotop.scss';

import React,{Component} from 'react';

import { Icon } from 'antd';

class HTotop extends Component{
    constructor(){
        super();
        this.state ={}
    }

    // componentDidMount(){
    //     let Tscroll = document.
    // }

    render(){
        return (
            <div id="HTotop" ref="Totop">
                <img className="app" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9bd8043c4c568f866a7f9651313567d9.gif" alt=""/>
                <div className="top"> <Icon className="icon" type="arrow-up"/> </div>
            </div>
        )
    }
}

export default HTotop;