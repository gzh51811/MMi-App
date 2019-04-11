
// 登录页短信验证输入框组件
import './CSS/ZCmain.scss';

import React,{Component} from 'react';
import {withRouter} from 'react-router';
import withAxios from '../hoc/withAxios';

import { Button, Icon, Radio, message, Modal } from 'antd';
const confirm = Modal.confirm;

class ZCmain extends Component {
    constructor(){
        super();
        this.state = {}

        this.ZhuC = this.ZhuC.bind(this);
    }

    // 点击立即注册
    async ZhuC(){
        var shoujih = this.refs.shoujih.value;
        var patte = /^1[34578]\d{9}$/;
        var { history, axios } = this.props;

        if(shoujih.match(patte)){
            let {data} = await axios.post('/zhuce',{
                uname : shoujih
            })
        
            if(data === 'ok'){
                confirm({
                    title: '注册成功',
                    content: '恭喜您！注册成功，直接去登录吧',
                    onOk() {
                      return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 100);
                        history.push('/login');
                      }).catch(() => console.log('Oops errors!'));
                    },
                    onCancel() {},
                  });
                  
            }else if(data === 'no'){
                confirm({
                    title: '消息提示',
                    content: '该手机号已经注册过了噢！请直接去登录吧',
                    onOk() {
                      return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 100);
                        history.push('/login');
                      }).catch(() => console.log('Oops errors!'));
                    },
                    onCancel() {},
                });
            }
        }else{
            message.error('请输入正确的手机号码！~');
        }
    }

    render(){
        return (
            <div id="ZCmain">
                <div className="ZCyanzh1">
                    <span>中国</span>
                    <span><Icon type="right"/></span>
                </div>
                <p className="ZCyanzh1-p">成功注册账号后，国家/地区将不能被修改</p>

                <div className="ZCyanzh2">
                    <span>+86&nbsp;></span>
                    <input ref="shoujih" placeholder="请输入手机号码"/>
                </div>
                <div className="ZCbtn1">
                    <Button type="primary" block onClick={this.ZhuC}>立即注册</Button>
                </div>
                <div className="ZChck">
                    <Radio defaultChecked="ture" checked="ture"></Radio>注册账号即表示您同意并愿意遵守小米
                    <span className="spp">用户协议</span>和<span className="spp">隐私政策</span>
                </div>
            </div>
        )
    }
}

ZCmain = withRouter(ZCmain);
ZCmain = withAxios(ZCmain);

export default ZCmain;