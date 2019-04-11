import React,{Component} from 'react';
import './Mine.css';
import {Icon} from "antd";

class Mine extends Component{
    constructor(){
        super();
        this.state={

        }
        this.out = this.out.bind(this)
        this.login = this.login.bind(this)
        this.zhuce = this.login.bind(this)
    }
    out(){
        localStorage.removeItem("username");
        this.props.history.push('/login')  
    }
    login(){
        this.props.history.push('/login')  
    }
    zhuce(){
        this.props.history.push('/lzhuce')  
    }
    render(){
        return(
            <div className="Mine">
                <div className="MineTop">
                <div className="Minepic">
                    <Icon type="user" style={{fontSize:"1rem"}} className="Iconuser"/>   
                </div>
                    {
                        localStorage.getItem('username')?<span className="mineword" onClick={this.out}>退出</span>
                        :
                        <>
                        <span className="mineword" onClick={this.login}>登录</span>
                        <span className="mineword">/</span>
                        <span className="mineword">注册</span>
                        </>
                    }
                        
                </div>
            </div>
        )
    }
   
}
export default Mine;