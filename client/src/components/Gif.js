import React, {Component} from 'react';
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${giphyAPI}&limit=1`;

class Gif extends Component{
    // Api Request 
    // state = {gif: []};
    
    componentDidMount() {
    this.fetchGifs();
    }

    // gifResult() {
    // $.getJSON("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + giphyAPI + "&limit=1")
    //    .then(({ results }) => this.setState({ gif: results }));
    // }   
    fetchGifs(){
        fetch(giphyEndpoint)
        .then(response => response.json())
        .then(data => console.log("This is the giphy data", data));
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="gif-space">
                        <h1>Gifs Go Here</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gif;