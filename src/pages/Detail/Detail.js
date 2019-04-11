import React,{Component} from 'react';
import DetailTop from '../../components/DetailTop/DetailTop.js';
import './Detail.css'
import Detailassets from '../../components/Detailassets/Detailassets.js';
import DetailTap from '../../components/DetailTap/DetailTap.js';
import GuessLike from '../../components/GuessLike/GuessLike.js';


class Detail extends Component {
    render(){
        return (
            <div className="Detail">
                <DetailTop/>
                <Detailassets/>
                <DetailTap/>
                <GuessLike/>
            </div>
        )
    }
       
}

export default Detail;