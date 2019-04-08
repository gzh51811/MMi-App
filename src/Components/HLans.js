
// 首页轮播图下的菜单栏组件

import React,{Component} from 'react';

class HLans extends Component {
    constructor(){
        super();
        this.state = 
            {
                tuijian:{
                    img : "",
                    gao : ''
                },
                shouji:{
                    img : "https://i8.mifile.cn/v1/a1/10b80c17-9f7c-d30c-945f-4d4dc3316252!720x152.webp",
                    gao : "2.110933rem"
                },
                bijiben:{
                    img : "https://i8.mifile.cn/v1/a1/9a138da6-7b63-9a51-dd17-83d3af6036e0!720x128.webp",
                    gao : "1.7776rem"
                },
                zhineng:{
                    img : "https://i8.mifile.cn/v1/a1/786a77ef-61d3-6d70-9282-d1e03bfd6831!720x143.webp",
                    gao : "1.985867rem"
                },
                dianshi:{
                    img : "https://i8.mifile.cn/v1/a1/106ee84b-6690-0ce2-1767-7bb33fa7b53a!720x100.webp",
                    gao : "1.3888rem"
                },
                jiadian:{
                    img : "https://i8.mifile.cn/v1/a1/9e917b14-addc-fcce-da60-ec10d4636792!720x80.webp",
                    gao : "1.110933rem"
                },
                zhoubian:{
                    img : "https://i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c!720x80.webp",
                    gao : "1.110933rem"
                }
            }
    }

    render(){
        let state = this.state;
        let type = this.props.data;
        let img = state[type].img;
        let gao = state[type].gao;
       
        return (
            <div style={{'position':'relative', 'top':'-5px', 'left':0}}>
                <img src={img} alt="" style={{'width': '100%', 'height':{gao}}} key={gao}/>
            </div>
        )
    }
}

export default HLans;