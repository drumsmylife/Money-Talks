import React, {Component} from 'react';
import Card from "./Card";
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
let giphySearchTerm = "stop";
const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=${giphySearchTerm}&api_key=${giphyAPI}&limit=50`;
let i = Math.floor(Math.random()*50);
let catergory = "";

class Gif extends Component{
    constructor(props){
        super(props);

        this.state = {
            gifs: [],
            isLoaded: false
        }
    }
    
    // componentDidMount() {
    // this.fetchGifs();
    // }

    // gifResult() {
    // $.getJSON("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + giphyAPI + "&limit=1")
    //    .then(({ results }) => this.setState({ gif: results }));
    // }   
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
        let gifs = this.state.gifs
        console.log(gifs)
            return(
                    <div className="row">
                        <div className="col-md-6">
                            <Card/><br/>
                            <Card/><br/>
                            <Card/><br/>
                        </div>
                        <div className="col-md-6">
                            <Card/><br/>
                            <Card/><br/>
                            <Card/><br/>
                        </div>
                    </div>
            )
        }
    
}

export default Gif;