import React,{Component} from 'react';
import DetailTop from '../../Components/DetailTop/DetailTop';
import './Detail.css'
import Detailassets from '../../Components/Detailassets/Detailassets';
import DetailTap from '../../Components/DetailTap/DetailTap';
import GuessLike from '../../Components/GuessLike/GuessLike';


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