import React, { Component } from 'react';
import "./ListHeader.css";
import {Icon} from 'antd';

class ListHeader extends Component {
    render() {
        return (
            <ul className="header">
                <li className="headerli left"><Icon type="left" style={{fontSize:"0.8rem"}}/></li>
                <li className="headerli words">商品列表</li>
                <li className="headerli search" onClick={this.toSearch}><Icon type="search" style={{fontSize:"0.8rem"}} /></li>
            </ul>
        )
    }

    toSearch(){
        
    }
}
export default ListHeader;