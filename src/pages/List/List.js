import React from 'react';
import TopList from '../../components/TopList/TopList.js';
import Likes from '../../components/Likes/Likes.js';
import ListHeader from '../../components/ListHeader/ListHeader.js';

function List(){
    return(
        <div>
             <ListHeader/>
            <TopList/>
            <Likes/>
        </div>
    )
}
export default List;