import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8888/setting';

export default (Com)=>{
    return function(props,context){
        return <Com axios={axios} {...props} {...context}/>
    }
}