
// 注册组件
import './Lzhuce.scss';

import React,{Component} from 'react';

// 引入组件
import ZCmain from '../../components/ZCmain.js';
import Lfoot from '../../components/Lfoot';

class Lzhuce extends Component {
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <div id="Lzhuce">
                <header id="ZhuceHead">
                    <p>注册小米账号</p>
                </header>

                <div className="zujian">
                    <ZCmain/>
                    <Lfoot/>
                </div>
            </div>
        )
    }
}

export default Lzhuce;
