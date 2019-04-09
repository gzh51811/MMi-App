import './Login.scss';

// 引入组件
import Lmainx from '../../Components/Lmainx.js';
import Lfoot from '../../Components/Lfoot.js';
import Llink from '../../Components/Llink.js';

import React,{Component} from 'react';

class Loginx extends Component {
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <div id="Login">
                <header id="LoginHead">
                    <img className="Himg" src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png" alt=""/>
                    <p className="Hp">小米账号登录</p>
                </header>

                <div>
                    <Lmainx/>
                    <Llink/>
                    <Lfoot/>
                </div>
            </div>
        )
    }
}

export default Loginx;