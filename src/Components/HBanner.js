
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
                    'https://i8.mifile.cn/v1/a1/909a8119-dc2e-7574-fbec-da3eae8a1cb9!720x505.webp'
                ],
                zhineng:[
                    'https://i8.mifile.cn/v1/a1/c3ed6d1c-d811-b4f1-8dee-6f58445879f9!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/9b5ea1bb-7746-6b54-3e59-10c0ab12aaf1!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/a8e92a59-0992-5929-7edd-d424bfb22240!720x360.webp'
                ],
                dianshi:[
                    'https://i8.mifile.cn/v1/a1/08047fde-ea8e-dcc4-f7a7-c2cdbc4d369b!720x466.webp'
                ],
                jiadian:[
                    'https://i8.mifile.cn/v1/a1/20b76697-875e-ae6f-2c4d-dc65c985207a!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/25d2090a-79a3-3c33-dec4-3568019eaefd!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/1cc5d1b8-74c3-b5b0-864c-3d777f22c3a3!720x360.webp'
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
        
        return(
            <div style={{'marginTop':'1.186rem'}}>
                <Carousel autoplay>
                    {
                        state[style].map((item,idx)=>
                            <div style={{'width':'100%', 'height':'auto'}} key={idx}>
                               {
                                    ['dianshi','bijiben'].indexOf(style) === -1 ? 
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