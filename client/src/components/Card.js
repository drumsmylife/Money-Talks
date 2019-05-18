import React, {Component} from 'react';

// let giphySearchTerm = "test";
// const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=${giphySearchTerm}&api_key=${giphyAPI}&limit=50`;



class Card extends Component{
    
    // Checks total from acounts.js and returns search term
    checkTotal(total){
        if (total <= 500){
            let giphySearchTerm = "Awesome"
            console.log("less than 500", giphySearchTerm)
            return giphySearchTerm
            
        }
        else if (500<= total && total <= 1500){
            let giphySearchTerm = "Not Bad"
            return giphySearchTerm
        }
        else if (1500<= total && total <=5000){
            let giphySearchTerm = "Slow Down Idiot"
            return giphySearchTerm
        }
        else{
            let giphySearchTerm = "STOP!"
            return giphySearchTerm
        }
    }


    


    render(){
        return(

            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src={this.state.gifs} className="card-img-top" alt="Gif" /> */}
                    <div className="card-body">
                        <h4>Category: {this.props.category}</h4>
                        <h5>Total Spent:  $ {this.props.total}</h5>
                        <h5>{this.checkTotal(this.props.total)}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;