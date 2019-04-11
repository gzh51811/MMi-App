
// 首页Tabs组件
import './CSS/HTabs.scss';

import React,{Component} from 'react';

// 引入子组件
import HBanner from './HBanner';
import HNavs from './HNavs';
import HLans from './HLans';
import Hshowf from './Hshowf';
import Hshowt from './Hshowt';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class HTabs extends Component {
    constructor(){
        super();
        this.state = {
            Ntabs : [
                {
                    tab : '推荐',
                    style : 'tuijian',
                    type : 'phone'
                },
                {
                    tab : '手机',
                    style : 'shouji',
                    type : 'phone',
                    color : 'rgb(230, 231, 251)'
                },
                {
                    tab : '笔记本',
                    style : 'bijiben',
                    type : 'pc',
                    color : 'rgb(35, 96, 47)'
                },
                {
                    tab : '智能',
                    style : 'zhineng',
                    type : 'zhineng',
                    color : 'rgb(151, 33, 241)'
                },
                {
                    tab : '电视',
                    style : 'dianshi',
                    type : 'tv',
                    color : 'rgb(231, 62, 39)'
                },
                {
                    tab : '家电',
                    style : 'jiadian',
                    type : 'jiadian'
                },
                {
                    tab : '周边',
                    style : 'zhoubian',
                    type : 'zhineng'
                },
            ]
        }

    }

    render(){
        let arr = ['bijiben','dianshi','zhineng','shouji'];
        return (
            <div>
                <Tabs defaultActiveKey="0" className="Tabs">
                    {
                        this.state.Ntabs.map((item,idx)=>
                        
                            <TabPane className="TabPane" tab={item.tab} key={idx}>
                                    <HBanner data={item.style}/>
                                    <HNavs data={item.style} data1={item.type}/>
                                    <HLans data={item.style}/>
                            {
                                arr.indexOf(item.style) === -1 ?
                                    <Hshowf data={item.type}/>
                                    :
                                    <Hshowt data={item.type} data1={item.color}/>
                            }
                                
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        )
    }
}

export default HTabs;