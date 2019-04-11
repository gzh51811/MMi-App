import React from 'react';
import TopList from '../../Components/TopList/TopList';
import Likes from '../../Components/Likes/Likes';
import ListHeader from '../../Components/ListHeader/ListHeader';

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