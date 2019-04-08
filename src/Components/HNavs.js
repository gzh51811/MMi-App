
// 首页轮播图下的菜单栏下的图片组件

import React,{Component} from 'react';

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
                    "https://i8.mifile.cn/v1/a1/c94db1ce-1e1b-f400-c39f-a3e2c48d66dc!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/17490d81-fff3-0333-391b-913a081b5446!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/7ef58eca-d2f2-621c-25cc-11289b4b70e4!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/f3689dfe-d6c9-bf29-0e3e-ad15f54dfe6b!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/805bb9f6-1e5e-9e7c-54a5-989f7e302b63!144x152.webp"
                ],
                zhineng:[
                    "https://i8.mifile.cn/v1/a1/eb52b416-ae95-8a0a-1f27-05a5985fe4cc!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/6a935cf6-eb64-3a51-9d1a-e12a75539685!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/d9fe5ed9-fb11-49ba-f0bb-04bb3092a4da!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/b915afbc-48cd-3b95-56b7-51242be24a8e!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/57dd459e-8d7f-e5c7-f087-f7f76b6737cc!144x152.webp"
                ],
                dianshi:[
                    "https://i8.mifile.cn/v1/a1/06b5fce7-754f-e82a-57f9-11730274c27d!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/7cc24738-2cd1-7169-45e1-803bc2667d78!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/21f6c26d-95b0-2c98-317e-6e62fb8b0ae7!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/9c4fc280-ee7e-10d6-06e0-df94eff350b3!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/e83baa69-c4d1-5844-2c2f-40d1f50fb5c5!144x152.webp"
                ],
                jiadian:[
                    "https://i8.mifile.cn/v1/a1/e44693a1-7703-8f89-fc0f-f280ee271ac9!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/9debf9a2-ff6b-b166-dc9e-8df8dcadf696!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/6c04eeb7-ba1f-a125-76b7-2639939d842f!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/560c7937-dff9-459f-44ec-d8690b563e16!144x152.webp",
                    "https://i8.mifile.cn/v1/a1/6cfa0be6-4c0d-38b7-7e52-782a384fd8f6!144x152.webp"
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

    render(){
        let state = this.state;
        let type = this.props.data;

        return (
            <div style={{'position':'relative', 'top':'-5px', 'left':0}}>
                {
                    type === 'shouji' ? 
                        state[type].map((item,idx) => <img src={item} alt="" style={{'width':'33.33%','padding':0}} key={idx}/>)
                    :
                        state[type].map((item,idx) => <img src={item} alt="" style={{'width':'20%','padding':0}} key={idx}/>)
                }
            </div>
        )
    }
}

export default HNavs;