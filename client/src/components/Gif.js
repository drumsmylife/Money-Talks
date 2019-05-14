import React, {Component} from 'react';
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${giphyAPI}&limit=5`;

class Gif extends Component{
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

    // gifResult() {
    // $.getJSON("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + giphyAPI + "&limit=1")
    //    .then(({ results }) => this.setState({ gif: results }));
    // }   
    fetchGifs(){
        fetch(giphyEndpoint)
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs)
            console.log(gifs.data.length)
            this.setState({
                isLoaded: true,
                gifs: gifs,
            })
        });
    }


    render(){
        let gifs = this.state.gifs
            return(
                <div className="container">
                    <div className="row">
                        <div className="gif-space">
                            <ul>   
                                {/* {gifs.map(gif => (
                                    <li key = {gifs.id}>
                                        {gifs}
                                    </li> */}
                                {/* ))} */}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    
}

export default Gif;