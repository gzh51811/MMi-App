
import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8888/setting';

export default (Component)=>{
    return function(props, context){
        return <Component axios={axios} {...props} {...context}/>
    }
}