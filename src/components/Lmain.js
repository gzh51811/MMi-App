
// 登录页短信验证输入框组件
import './CSS/Lmain.scss';

import React,{Component} from 'react';
import {withRouter} from 'react-router';
import withAxios from '../hoc/withAxios';

import { Button, message } from 'antd';

class Lmain extends Component {
    constructor(){
        super();
        this.state = {
            Yannum : '',
            _token : '',
            isok : true,
            num : 60
        }

        this.GoUser = this.GoUser.bind(this);
        this.Houqu = this.Houqu.bind(this);
        this.GoLins = this.GoLins.bind(this);
    }

    // 点击去到用户名登录页面
    GoUser(){
        let {history} = this.props;
        history.push('/loginx');
    }

    // 点击获取验证码
    async Houqu(){
        this.setState({
            isok : false
        })
        let userphone = this.refs.userphone.value;
        var {chong,ma} = this.refs;
        let patt = /^1[34578]\d{9}$/;
        let {axios} = this.props;
        
        if (userphone.match(patt)) {
            let {data} = await axios.get('/duanxin',{
                params:{
                    userphone : userphone
                }
            })
            // console.log(data);
            chong.style.display = 'block';
            ma.style.display = 'none';
            let timer = setInterval(() => {
                let {num} = this.state;
                this.setState({
                    num : num-1
                })
                if(num <= 0){
                    ma.style.display = 'block';
                    chong.style.display = 'none';
                    clearInterval(timer);
                    this.setState({
                        num : 60
                    })
                }
            }, 1000);

            this.setState({
                Yannum : data.num,
                _token : data._token,
                miao : 60
            })
        }else {
            message.error('请输入正确的手机号码！~');
        } 
    }

    // 点击登录/注册
    GoLins(){
        let {Yannum, _token} = this.state;
        let { history } = this.props;
        let userphone = this.refs.userphone.value;
        let yzm = this.refs.yzm.value;

        if(userphone && yzm){
            if(yzm === Yannum){
                history.push('/home');
                localStorage.setItem('username',userphone);
                localStorage.setItem('token',_token);
            }else{
                message.error('您的验证码不正确哦!~');
            }
        }else{
            message.error('请输入手机号码或短信验证码');
        }
    }


    render(){
        let {num} = this.state;
        return (
            <div id="Lmain">
                <div className="yanzh1">
                    <span>+86&nbsp;></span>
                    <input ref="userphone" placeholder="手机号码"/>
                </div>
                <div className="yanzh2">
                    <input ref="yzm" placeholder="短信验证码"/>
                    <span ref='ma' className="huoqu" onClick={this.Houqu}>获取验证码</span>
                    <span ref='chong' className="chongfa" style={{color:'#999',display:'none'}}>重新发送({num})</span>
                </div>
                <div className="btn1">
                    <Button type="primary" block onClick={this.GoLins}>立即登录/注册</Button>
                </div>
                <div className="btn2" onClick={this.GoUser}>
                    <Button block>用户名密码登录</Button>
                </div>
            </div>
        )
    }
}

Lmain = withRouter(Lmain);
Lmain = withAxios(Lmain);

export default Lmain;