
// 登录页短信验证输入框组件
import './CSS/ZCmain.scss';

import React,{Component} from 'react';

import { Button, Icon, Radio } from 'antd';

class ZCmain extends Component {
    constructor(){
        super();
        this.state = {}
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
                    <input placeholder="请输入手机号码"/>
                </div>
                <div className="ZCbtn1">
                    <Button type="primary" block>立即注册</Button>
                </div>
                <div className="ZChck">
                    <Radio defaultChecked="ture" checked="ture"></Radio>注册账号即表示您同意并愿意遵守小米
                    <span className="spp">用户协议</span>和<span className="spp">隐私政策</span>
                </div>
            </div>
        )
    }
}

export default ZCmain;