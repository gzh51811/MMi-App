
// Taps分类页首图组件

import React from 'react';

function TapsImg(props){
    let {data} = props;
    return (
        <div id="TapsImg" >
            <img src={data} alt="" style={{width:'6.937067rem',height: '2.7776rem','marginLeft':'-4px'}} />
        </div>
    )
}

export default TapsImg;