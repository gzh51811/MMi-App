import React from 'react';
import TopList from '../../components/TopList/TopList';
import Likes from '../../components/Likes/Likes';
import ListHeader from '../../components/ListHeader/ListHeader';

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