
// 登录页短信验证输入框组件
import './CSS/Lmain.scss';

import React,{Component} from 'react';
import {withRouter} from 'react-router';

import { Button } from 'antd';

class Lmain extends Component {
    constructor(){
        super();
        this.state = {}

        this.GoUser = this.GoUser.bind(this);
    }

    // 点击去到用户名登录页面
    GoUser(){
        let {history} = this.props;
        history.push('/loginx');
    }

    render(){
        return (
            <div id="Lmain">
                <div className="yanzh1">
                    <span>+86&nbsp;></span>
                    <input placeholder="手机号码"/>
                </div>
                <div className="yanzh2">
                    <input placeholder="短信验证码"/>
                    <span>获取验证码</span>
                </div>
                <div className="btn1">
                    <Button type="primary" block>立即登录/注册</Button>
                </div>
                <div className="btn2" onClick={this.GoUser}>
                    <Button block>用户名密码登录</Button>
                </div>
            </div>
        )
    }
}

Lmain = withRouter(Lmain);

export default Lmain;