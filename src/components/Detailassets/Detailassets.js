import React,{Component} from "react";
import {Icon} from "antd";
import './Detailassets.css'

class Detailassets extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="Detailassets">
                <ul className="DetailassetsUl">
                    <li className="Dli">
                        <span><Icon type="switcher" /></span>
                        <span>屏幕尺寸</span>
                        <span>32英寸</span>
                    </li>
                    <li>
                        <span><Icon type="credit-card" /></span>
                        <span>分辨率</span>
                        <span>高清</span>
                    </li>
                    <li>
                        <span><Icon type="hdd" /></span>
                        <span>处理器</span>
                        <span>64位四核</span>
                    </li>
                    <li>
                        <span><Icon type="tablet" /></span>
                        <span>存储</span>
                        <span>1GB+4GB</span>
                    </li>
                </ul>
                <div className="greybac">
                    <p className="greybacp">
                        <span className="dselected">已选</span>
                        <span className="ddec">小米电视 4A x 1 </span>
                        <span className="dicon"><Icon type="right" /></span> 
                    </p>
                    <p className="greybacp">
                        <span className="dselected">送至</span>
                        <span className="ddec">北京市 东城区 有现货</span>
                        <span className="dicon"><Icon type="right" /></span> 
                    </p>
                    <p className="greybacp">
                        <span className="dselected1"><Icon type="check-circle" />小米自营</span>
                        <span className="ddec1"><Icon type="check-circle" />小米发货</span>
                        <span className="dicon1"><Icon type="check-circle" />七天无理由退货</span> 
                        <span className="dicon2"><Icon type="right" /></span> 
                    </p>
                </div>
                <div className="discuss">
                    <p className="discussTop">
                        <img alt="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/7c9b0035578039726e90325450d6cd87.webp"/>
                        <li className="discusstitle">小米MAX</li>
                        <li className="discusslike"><Icon type="like" />324</li>
                    </p>
                    <p>非常不错，一直信赖小米，新年快到了，客服妹子新年快乐</p>
                    <p className="discussimg"> 
                        <img alt="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/2f46bd9b4ca0e1293b64336c23a6c601.webp"/>
                        <img alt="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/0b007712affc7ef83d19dfcd36e64219.webp"/>
                        <img alt="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/2abedbee4dbf714514fb804b45c14564.webp"/>
                    </p>
                </div>
                <div className="discussmore">更多评论<Icon type="right" /></div>
            </div>
        )
    }
}
export default Detailassets;