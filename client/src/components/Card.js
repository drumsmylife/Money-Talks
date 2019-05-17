import React, {Component} from 'react';
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
let giphySearchTerm = "stop";
const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=${giphySearchTerm}&api_key=${giphyAPI}&limit=50`;
let i = Math.floor(Math.random()*50);

class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            gifs: [],
            isLoaded: false
        }
    }
    
    componentDidMount() {
    this.fetchGifs();
    }

   
    fetchGifs(){
        fetch(giphyEndpoint)
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs.data[i].images.downsized.url)
            console.log(gifs.data.length)
            
            this.setState({
                isLoaded: true,
                gifs: gifs.data[i].images.downsized.url,
            })
        });
    }


    render(){
        return(

            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img src={this.state.gifs} className="card-img-top" alt="Gif" />
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