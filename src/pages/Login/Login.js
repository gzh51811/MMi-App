
import './Login.scss';

// 引入组件
import Lmain from '../../components/Lmain.js';
import Lfoot from '../../components/Lfoot.js'
import Llink from '../../components/Llink.js';

import React,{Component} from 'react';

class Login extends Component {
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
                    <Lmain/>
                    <Llink/>
                    <Lfoot/>
                </div>
            </div>
        )
    }
}

export default Login;