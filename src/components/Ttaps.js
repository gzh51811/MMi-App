
// Taps分类页Tab切换组件

import './CSS/Ttaps.scss';

import React,{Component} from 'react';

// 引入组件
import TapsImg from './TapsImg';
import TapShow from './TapShow';

import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

class Ttaps extends Component {
    constructor(){
        super();
        this.state = {
            TapList : [
                {
                    name : '新品',
                    key : '001',
                    img : 'https://i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp'
                },
                {
                    name : '众筹',
                    key : '002',
                    img : 'https://i8.mifile.cn/v1/a1/4a124f61-aaac-8e83-3698-50e1e065f402!500x200.webp'
                },
                {
                    name : '手机',
                    key : '003',
                    img : 'https://i8.mifile.cn/v1/a1/eacf5445-a567-c5e1-0318-78cf3938f8d4!500x200.webp'
                },
                {
                    name : '电视',
                    key : '004',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69bf9d06a7285a70adbec96448d5377c.jpg?thumb=1&w=500&h=200'
                },
                {
                    name : '电脑',
                    key : '005',
                    img : 'https://i8.mifile.cn/v1/a1/efdcf401-f553-aef7-1751-43854b6f4a20!500x200.webp'
                },
                {
                    name : '家电',
                    key : '006',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200'
                },
                {
                    name : '路由',
                    key : '007',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f1042af20f63f37c30bd9399efdc0b7a.jpg?thumb=1&w=500&h=200'
                },
                {
                    name : '出行',
                    key : '008',
                    img : 'https://i8.mifile.cn/v1/a1/ff205815-61e1-ef9f-d7d2-5650f1224c4b!500x200.webp'
                },
                {
                    name : '穿戴',
                    key : '009',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/55a9f5db1e6cd217a27b6b59d64509cd.jpg?thumb=1&w=500&h=200'
                },
                {
                    name : '智能',
                    key : '010',
                    img : 'https://i8.mifile.cn/v1/a1/12ff1518-0d4e-516d-173b-97451db7e71d!500x200.webp'
                },
                {
                    name : '电源',
                    key : '011',
                    img : 'https://i8.mifile.cn/v1/a1/d5c4dbf2-1f00-e781-9547-1755db662801!500x200.webp'
                },
                {
                    name : '健康',
                    key : '012',
                    img : 'https://i8.mifile.cn/v1/a1/46c35310-1039-d412-a688-c78fca114234!500x200.webp'
                },
                {
                    name : '灯具',
                    key : '013',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0c177037f9584ae4a0d0f15928f36602.jpg?thumb=1&w=500&h=200'
                },
                {
                    name : '儿童',
                    key : '014',
                    img : 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0c177037f9584ae4a0d0f15928f36602.jpg?thumb=1&w=500&h=200'
                },
            ]
        }
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }

    render(){
        let {TapList} = this.state;
        return(
            <div id="Ttaps">
                <Tabs defaultActiveKey="001" tabPosition="left">
                    {
                        TapList.map( item =>
                            <TabPane className="TabPane" tab={item.name} key={item.key}>
                                <TapsImg data={item.img}/>
                                <TapShow data={item.name}/>
                            </TabPane>
                        )
                    }
                </Tabs>
                
            </div>
        )
    }
}

export default Ttaps;