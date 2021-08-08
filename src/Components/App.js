import React, { Component } from 'react'
import youtubeApi from '../APIS/YoutubeAPI'
import SearchBar from './SearchBar'
import Videolist from './VideoList'
import VideoDetail from './VideoDetail'


export default class App extends Component {
    state={ videos : [],selecteVideo:null };
    onVideoSelect = (vide) =>
    {
        console.log("from the item",vide);
        this.setState({selecteVideo:vide});
    };

    componentDidMount(){
        this.onFormSubmit('Hello');
    }

    onFormSubmit= async (term)=>{
      const response = await youtubeApi.get('/search',{
       params :{
           q:term}       
       
       });
       this.setState({videos:response.data.items,
    selecteVideo:response.data.items[0]});
       

    };

    render() {
        return (
            <div className="ui container">
                Search
                <SearchBar onFormSubmit={this.onFormSubmit}/>                
                <div className="ui grid">
                    <div className="ui row">
                        <div className =" eleven wide column">
                            <VideoDetail video={this.state.selecteVideo}></VideoDetail>
                        </div>
                        <div className =" five wide column">
                            <Videolist
                            videos= {this.state.videos} onVideoSelect={this.onVideoSelect}></Videolist>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

