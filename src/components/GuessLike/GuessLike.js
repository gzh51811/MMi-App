import React, { Component } from 'react';
import './GuessLike.css';
import withAxios from '../../hoc/withAxios';


class GuessLike extends Component{
    constructor(){
        super();
        this.state={
            likes:[]
        }
    }
    async componentDidMount() {
        let { data } = await this.props.axios.get('/youlikes', {
            params: {
                item_id: ''
            }
        })
        // console.log(data);
        this.setState({
            likes: data
        });
    }
    render(){
        return(
            <div className="GuessLike">
                <h2>为你推荐</h2>
                <ul className="GuessLikeul">
                {
                        this.state.likes.map(goods=>
                            <li key={goods.item_id}>
                            <div className="likesliimg">
                                <img alt="" src={goods.item_url}/>
                            </div>
                            <p className="likeswords">{goods.item_name}</p>
                            <p>
                            <span className="likespri">￥{goods.item_price}</span>
                                {/* <span className="likesdis"><del>￥2798</del></span> */}
                            </p>
                        </li>
                        
                        )
                    }
                </ul>
            </div>
        )
    }
}
GuessLike = withAxios(GuessLike);
export default GuessLike;