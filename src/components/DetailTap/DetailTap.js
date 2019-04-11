import React, { Component } from 'react';
import './DetailTap.css';
import { Icon,Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class DetailTap extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    callback(key){
        console.log(key);
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback} className="Tabs">
                    <TabPane tab="概述" key="1">
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e37e0fdddb408ab2a6c23b99de593cb5.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca84f321f2740ea9b5f79c444be61a8.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fd071a7646170f9535e741d3d491b0f.jpg"/>
                    </TabPane>
                    <TabPane tab="参数" key="2">
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc455c8d4d4dc0d56f56d791bab9668.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca84f321f2740ea9b5f79c444be61a8.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fd071a7646170f9535e741d3d491b0f.jpg"/>
                    </TabPane>
                    <TabPane tab="安装服务" key="3">
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc455c8d4d4dc0d56f56d791bab9668.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca84f321f2740ea9b5f79c444be61a8.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fd071a7646170f9535e741d3d491b0f.jpg"/>
                    </TabPane>
                    <TabPane tab="常见问题" key="4">
                        <img alt="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d2ba7b27d499a507b9bf6a0965637bf.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca84f321f2740ea9b5f79c444be61a8.jpg"/>
                        <img alt="" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fd071a7646170f9535e741d3d491b0f.jpg"/>
                    </TabPane>
                </Tabs>
                <div className="Tabswords">查看全部图文详情<Icon type="right" /></div>
            </div>
        )
    }
}
export default DetailTap;