
// 登录页用户名登录输入框组件
import './CSS/Lmainx.scss';

import React,{Component} from 'react';
import {withRouter} from 'react-router';

import { Button, Icon } from 'antd';

class Lmainx extends Component {
    constructor(){
        super();
        this.state = {}

        this.GoPhone = this.GoPhone.bind(this);
        this.GoZhuce = this.GoZhuce.bind(this);
        this.Loginx = this.Loginx.bind(this);
    }

    // 点击去到短信验证页面
    GoPhone(){
        let {history} = this.props;
        history.push('/login');
    }

    // 点击跳转注册页面
    GoZhuce(){
        let {history} = this.props;
        history.push('/lzhuce');
    }

    componentDidMount(){
        let userx = document.querySelector('#userx').value;
        let passwx = document.querySelector('#passwx').value;

    }


    render(){
        return (
            <div id="Lmainx">
                <div className="yanzh1">
                    <input id="userx" placeholder="邮箱/手机号码/小米ID"/>
                </div>
                <div className="yanzh2">
                    <input id="passwx" type="password" placeholder="密码"/>
                    <span><Icon type="eye" theme="filled" style={{'fontSize':'18px'}}/></span>
                </div>
                <div className="btn1" onClick={this.Loginx}>
                    <Button type="primary" block>立即登录/注册</Button>
                </div>
                <div className="btn2" onClick={this.GoPhone}>
                    <Button block>手机短信登录注册</Button>
                </div>
                <div className="dianji2">
                    <span onClick={this.GoZhuce}>立即注册</span>
                    <span>忘记密码？</span>
                </div>
            </div>
        )
    }
}

Lmainx = withRouter(Lmainx);

export default Lmainx;