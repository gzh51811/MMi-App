
// 登录页Llink组件
import './CSS/Llink.scss';

import React from 'react';

import { Icon } from 'antd';

function Llink(){
    return (
        <div id="Llink">
            <div className="Hfang-div1"><span>其他方式登录</span></div>
            <div className="Hfang-div2">
                <span className="div-sp"><Icon type="weibo-circle" theme="filled" style={{'color':'#ed9090', 'fontSize':'28px'}}/></span>
                <span className="div-sp"><Icon type="taobao-circle" theme="filled" style={{'color':'#ff6700', 'fontSize':'28px'}}/></span>
                <span className="div-sp"><Icon type="alipay-circle" theme="filled" style={{'color':'#6bb6ea', 'fontSize':'28px'}}/></span>
            </div>
        </div>
    )
}

export default Llink;
