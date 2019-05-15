import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(

            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="Gif" />
                    <div className="card-body">
                        <h4>Category: </h4>
                        <h5>Total Spent: $</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;