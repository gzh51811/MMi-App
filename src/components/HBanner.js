
// 首页轮播图组件

import React,{Component} from 'react';

import { Carousel } from 'antd';

class HBanner extends Component{
    constructor(){
        super();
        this.state = 
            {
                tuijian: [
                 'https://i8.mifile.cn/v1/a1/ce67480c-b2dc-5bd4-742e-03ee43202814!720x360.webp',
                 'https://i8.mifile.cn/v1/a1/310187fb-67e3-4f23-82a8-62a1adc96aa1!720x360.webp',
                 'https://i8.mifile.cn/v1/a1/569835bc-4925-de08-2c22-121492ac8684!720x360.webp'
                ],
                shouji:[
                    'https://i8.mifile.cn/v1/a1/1edb136d-b74d-417d-8de1-8eef889c3ff6!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/1edb136d-b74d-417d-8de1-8eef889c3ff6!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/b6f670fb-688c-0ce3-6aed-03674b4260e4!720x360.webp'
                ],
                bijiben:[
                    'https://i8.mifile.cn/v1/a1/909a8119-dc2e-7574-fbec-da3eae8a1cb9!720x505.webp'
                ],
                zhineng:[
                    'https://i8.mifile.cn/v1/a1/351c06e4-91f1-0b9e-e8c0-e319450f22c2!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/760fba04-4eb5-c671-c6e3-bd386b64299f!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/0aa66f7f-d5c4-84b5-f1a6-a79fdae0b7b8!720x360.webp'
                ],
                dianshi:[
                    'https://i8.mifile.cn/v1/a1/08047fde-ea8e-dcc4-f7a7-c2cdbc4d369b!720x466.webp'
                ],
                jiadian:[
                    'https://i8.mifile.cn/v1/a1/7c404633-7444-49c9-e4e9-b3e94f8ac883!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/efbbd133-ce5a-efb7-62ff-ac0c39b3d5b2!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/b1b83e3d-3bb7-8e8e-f071-e74629f7438b!720x360.webp',
                ],
                zhoubian:[
                    'https://i8.mifile.cn/v1/a1/c3c6961c-bff6-56be-0908-5b8206d874ba!720x360.webp',
                    'https://i8.mifile.cn/v1/a1/da04ab4d-1b18-d753-817d-7cca89f3fd37!720x360.webp',
                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/66d1bc639990d301a5dde39a9df2ecfc.jpg?thumb=1&w=720&h=360'
                ]
            }
        
    }

    render(){
        let state = this.state;
        let style = this.props.data;
        let arrx = ['dianshi','bijiben'];
        
        return(
            <div style={{marginTop:'2.453333rem',width:'100%'}}>
                <Carousel autoplay>
                    {
                        state[style].map((item,idx)=>
                            <div style={{'width':'100%', 'height':'auto'}} key={idx}>
                               {
                                    arrx.indexOf(style) === -1 ? 
                                    <img src={item} alt="" style={{height: '187.5px', width:'375px'}} key={idx}/>
                                    :
                                    <img src={item} alt="" style={{height: '250px', width:'375px'}} key={idx}/>
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