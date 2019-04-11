
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
                    img : "https://i8.mifile.cn/v1/a1/ce3de032-3bcf-a7aa-a122-b7d52dfa26c2!720x106.webp",
                    gao : "1.7776rem"
                },
                zhineng:{
                    img : "https://i8.mifile.cn/v1/a1/38ec1523-2e9a-edeb-7bc5-e36a00e7683e!720x80.webp",
                    gao : "1.985867rem"
                },
                dianshi:{
                    img : "https://i8.mifile.cn/v1/a1/7f31f870-bcec-b6d9-100e-5cf9b23b40f4!720x100.webp",
                    gao : "1.3888rem"
                },
                jiadian:{
                    img : "https://i8.mifile.cn/v1/a1/b8d72dc6-3082-3bdb-69d7-5ac8e3d9cb37!720x100.webp",
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