
import './Tap.scss';

import React,{Component} from 'react';

// 引入组件
import Ttaps from '../../Components/Ttaps';

import {Icon} from 'antd';

class Tap extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div id="Tap">
                <header className="Tap-header">
                    <span className="Header-span Header-span1"><Icon type="left"/></span>
                    <span className="Header-span Header-span2">分类</span>
                    <span className="Header-span Header-span3"><Icon type="search"/></span>
                </header>

                <div className="Tap-div">
                    <Ttaps/>
                </div>
            </div>
        )
    }
}


export default Tap;