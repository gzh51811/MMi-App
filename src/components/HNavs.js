
// 首页轮播图下的菜单栏下的图片组件

import React,{Component} from 'react';
import {withRouter} from 'react-router';

class HNavs extends Component {
    constructor(){
        super();
        this.state =
            {
                tuijian:[
                    "https://i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/08a2268a-5554-7170-95d6-301ef8db4325!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp"
                ],
                shouji:[
                    "https://i8.mifile.cn/v1/a1/594388d0-370f-b960-9c2a-0061205ef90f!240x316.webp",
                    "https://i8.mifile.cn/v1/a1/89663d23-3fc9-6da1-1053-4d850157337e!240x316.webp",
                    "https://i8.mifile.cn/v1/a1/9a6e525b-609c-3374-ff8d-5a0310bd4ac8!240x316.webp"
                ],
                bijiben:[
                    "https://i8.mifile.cn/v1/a1/4f43f69d-fd19-876c-123e-18a5de855777!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/eab515e8-ca30-0568-188f-cfe3732160c4!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/c145c175-f9d2-401a-337d-0807199d20c2!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/1e38c6bb-93db-ecc9-a383-b72017a66eb8!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/73773fed-e3ba-8b88-0be7-3ef112ba0ec5!144x152.webp"
                ],
                zhineng:[
                    "https://i8.mifile.cn/v1/a1/8aad2f42-4f56-94d0-3f04-45134d61d47e!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/aa50eae6-87bd-b912-8e1a-2aee13b6f83a!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/baa57fa6-c0da-139b-ac1f-f44e447b8b33!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/5fad82b1-8fc4-6d80-e047-5cfe9d5f348c!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/b49d4077-7f46-f4e1-c0f3-cb4279bc20ea!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/ab0c891c-1066-ecb8-2a7b-8a7e2f6d931c!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/cbf0ff22-dfe3-ce02-c072-f4887e84dee4!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/610486de-22f8-8e86-c6db-cdf8a8febeb8!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/77f76065-51f5-5131-6778-3515abe0415f!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/5e574401-f819-f1a5-94b7-00796e6733e7!144x152.webp"
                ],
                dianshi:[
                    "https://i8.mifile.cn/v1/a1/06b5fce7-754f-e82a-57f9-11730274c27d!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/7cc24738-2cd1-7169-45e1-803bc2667d78!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/21f6c26d-95b0-2c98-317e-6e62fb8b0ae7!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/9c4fc280-ee7e-10d6-06e0-df94eff350b3!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/e83baa69-c4d1-5844-2c2f-40d1f50fb5c5!144x152.webp"
                ],
                jiadian:[
                    "https://i8.mifile.cn/v1/a1/b2ac90e0-dac1-3a5f-e404-d173b96c54ee!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/9a16c4de-8bd9-b1b4-1496-41ac831df30e!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/5a84d08f-22fe-ba4b-175a-2b850c052e3f!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/ea38dc30-7698-3963-1cdf-fb0050fa5806!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/86bad396-4425-4981-b1af-b7ce3d7b2da7!144x152.webp"
                ],
                zhoubian:[
                    "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744a6c8c5fd696193d9f608f683f9c6e.jpg?thumb=1&w=144&h=152",
                    "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2aec734a14f5301128219279b016c9a6.jpg?thumb=1&w=144&h=152",
                    "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebe7f67192ddb55b4f8f94f2e1ab4376.jpg?thumb=1&w=144&h=152",
                    "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/08b6ade705922f14f196bcd905903caf.jpg?thumb=1&w=144&h=152",
                    "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/921ce6cd7c033799e45ca01e32430402.jpg?thumb=1&w=144&h=152"
                ]
            }
    }

    // 点击跳转到列表
    GoList(type){
        console.log(type);
        let {history} = this.props;
        history.push({
            pathname : '/list/' + type,
            search : '?type=' + type,
            state : {type}
        })
    }

    render(){
        let state = this.state;
        let style = this.props.data;
        let type = this.props.data1;

        return (
            <div style={{'position':'relative', 'top':'-5px', 'left':0}}>
                {
                    style === 'shouji' ? 
                        state[style].map((item,idx) => <img onClick={this.GoList.bind(this,type)} src={item} alt="" style={{'width':'33.33%','padding':0}} key={idx}/>)
                    :
                        state[style].map((item,idx) => <img onClick={this.GoList.bind(this,type)} src={item} alt="" style={{'width':'20%','padding':0}} key={idx}/>)
                }
            </div>
        )
    }
}

HNavs = withRouter(HNavs);

export default HNavs;