import React,{Component} from 'react';
import {Icon} from 'antd';
import {Route,withRouter,Switch,Redirect} from "react-router-dom";
import './rem.js';
import 'antd/dist/antd.css';

import Home from './pages/Home/Home.js';
import Tap from './pages/Tap/Tap.js';
import Find from './pages/Find/Find.js';
import Cart from './pages/Cart/Cart.js';
import Mine from './pages/Mine/Mine.js';
import Detail from './pages/Detail/Detail.js';

//列表页
import List from './pages/List/List'

import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state={
            navs:[
                {
                    text:"首页",
                    name:"home",
                    path:'/home',
                    icon:'home'
                },{
                    text: '分类',
                    name: 'Tap',
                    path: '/tap',
                    icon:'book'
                },{
                    text: '发现',
                    name: 'Find',
                    path: '/find',
                    icon:'file-search'
                },{
                    text: '购物车',
                    name: 'Cart',
                    path: '/cart',
                    icon:'shopping-cart'
                },{
                    text: '我的',
                    name: 'Mine',
                    path: '/mine',
                    icon:'user' 
                },
            ],
            current:'Home' ,
            bool:0
        }
    }

    handleClick = (path,idx,e) =>{
        // console.log(path)
        // console.log(idx)
        this.props.history.push(path);
        this.setState({
            bool:idx

        })
        console.log(this.state.bool)
      }

   render(){
    //    console.log(this.props.location.pathname)
       let path = this.props.location.pathname.slice(0,8)
    //    console.log(path)
    return(
        <div>
           
            <div className="footer" style={path===("/detail/"||"cart"||"/login/"||"/loginx/"||"/lzhuce/")?{left:"-999px"}:{left:"0"}}>
                
                <ul>
                    {
                        this.state.navs.map((item,idx)=> 
                            //bind改变this指向，同时传参；
                        <li className={this.state.bool===idx? "active":""} onClick={this.handleClick.bind(this,item.path,idx)} key={item.path}>
                            <i><Icon type={item.icon} style={{fontSize:"0.48rem"}}/></i>
                            <span>{item.text}</span>
                        </li>)
                    } 
                </ul>
            </div>
            <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/tap' component={Tap}/>
                    <Route path='/find' component={Find}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/mine' component={Mine}/>
                    <Route path='/list' component={List}/>
                    <Route path='/detail' component={Detail}/>
                    <Redirect from="/" to="/home" />
                </Switch>
        </div>
    )
   }
}
App = withRouter(App);
export default App;
