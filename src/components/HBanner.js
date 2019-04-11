
// 首页轮播图组件

import React,{Component} from 'react';

import { Carousel } from 'antd';

class HBanner extends Component{
    constructor(){
        super();
        this.state = 
            {
                tuijian: [
                 'https://i8.mifile.cn/v1/a1/0ae6424e-1f6b-4113-6a1b-7c3d4a260ddf!720x360.webp',
                 'https://i8.mifile.cn/v1/a1/e6611c78-958e-25f0-e81e-990493b44d25!720x360.webp',
                 'https://i8.mifile.cn/v1/a1/649e9979-217b-8477-6240-e033677ab4ee!720x360.webp'
                ],
                shouji:[
                    'https://i8.mifile.cn/v1/a1/5f54a9ac-c371-0699-a808-b6505dfc9505!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/e6611c78-958e-25f0-e81e-990493b44d25!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/b6f670fb-688c-0ce3-6aed-03674b4260e4!720x360.webp'
                ],
                bijiben:[
                    'https://i8.mifile.cn/v1/a1/ed7c61c4-bb44-8872-f0d7-06cce0135ea8!720x500.webp'
                ],
                zhineng:[
                    'https://i8.mifile.cn/v1/a1/8d5a3e4e-ef20-a2ad-f440-e26023ef4b18!720x517.webp'
                ],
                dianshi:[
                    'https://i8.mifile.cn/v1/a1/08047fde-ea8e-dcc4-f7a7-c2cdbc4d369b!720x466.webp'
                ],
                jiadian:[
                    'https://i8.mifile.cn/v1/a1/a4635880-51ae-c058-57d2-dedec2f872b6!720x487.webp'
                ],
                zhoubian:[
                    'https://i8.mifile.cn/v1/a1/4c410b0c-968e-d1da-3410-0c6cc25f4ba3!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/da04ab4d-1b18-d753-817d-7cca89f3fd37!720x360.webp',
                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/66d1bc639990d301a5dde39a9df2ecfc.jpg?thumb=1&w=720&h=360'
                ]
            }
        
    }

    render(){
        let state = this.state;
        let style = this.props.data;
        let arrx = ['dianshi','bijiben','zhineng','jiadian'];
        
        return(
            <div style={{'marginTop':'1.186rem'}}>
                <Carousel autoplay>
                    {
                        state[style].map((item,idx)=>
                            <div style={{'width':'100%', 'height':'auto'}} key={idx}>
                               {
                                    arrx.indexOf(style) === -1 ? 
                                    <img src={item} alt="" style={{'height': '5rem', 'width':'100%'}} key={idx}/>
                                    :
                                    <img src={item} alt="" style={{'height': '6.666667rem', 'width':'100%'}} key={idx}/>
                               }
                            </div>    
                        )
                    }
                </Carousel>
            </div>
        )
    }
}


export default HBanner;