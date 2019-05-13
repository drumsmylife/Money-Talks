import React, {Component} from 'react';
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${giphyAPI}&limit=1`;

class Gif extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }
    
    componentDidMount() {
    this.fetchGifs();
    }

    // gifResult() {
    // $.getJSON("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + giphyAPI + "&limit=1")
    //    .then(({ results }) => this.setState({ gif: results }));
    // }   
    fetchGifs(){
        fetch(giphyEndpoint)
        .then(res => res.json())
        .then(json => 
            {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
        
    }

    render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="gif-space">
                            {/* <ul>        
                                {items.map(item => (
                                    <li key = {item.id}>
                                        {item.images.downsized.url}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            )
        }
    
}

export default Gif;