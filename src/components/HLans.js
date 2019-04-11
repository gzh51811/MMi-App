
// 首页轮播图下的菜单栏组件

import React,{Component} from 'react';

class HLans extends Component {
    constructor(){
        super();
        this.state = 
            {
                tuijian:{
                    img : "https://i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp",
                    gao : ''
                },
                shouji:{
                    img : "https://i8.mifile.cn/v1/a1/10b80c17-9f7c-d30c-945f-4d4dc3316252!720x152.webp",
                    gao : "80px"
                },
                bijiben:{
                    img : "https://i8.mifile.cn/v1/a1/9a138da6-7b63-9a51-dd17-83d3af6036e0!720x128.webp",
                    gao : "67px"
                },
                zhineng:{
                    img : "https://i8.mifile.cn/v1/a1/dc3b1271-0d28-7143-bb18-0e97e551d073!720x80.webp",
                    gao : "1.985867rem"
                },
                dianshi:{
                    img : "https://i8.mifile.cn/v1/a1/71f6b586-528b-7f80-73ea-e757bafd95dc!720x101.webp",
                    gao : "1.3888rem"
                },
                jiadian:{
                    img : "https://i8.mifile.cn/v1/a1/eb69d32d-1813-8cda-6ba7-e293b77f52dd!720x80.webp",
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
        let arrs = ['tuijian'];

        return (
            <div style={{'position':'relative', 'top':'-5px', 'left':0}}>
                {
                    arrs.indexOf(type) === -1 ? 
                    <img src={img} alt="" style={{'width': '100%', 'height':'54px'}} key={gao}/>
                    :
                    <img src={img} alt="" style={{'width': '100%', 'height':''}} key={gao}/>
                }
                
            </div>
        )
    }
}

export default HLans;