import React from 'react';
import './videoitem.css';

export default function VideoItem({video,onVideoSelect}) {
   
    
    return (

        <div className="video-item item" onClick={()=>onVideoSelect(video)}>
           <img className="ui image" 
           src={video.snippet.thumbnails.medium.url}
           alt={video.snippet.title}></img>
           <div className="content"><div className="header">{video.snippet.title}</div></div >
          
        </div>
    )
}
