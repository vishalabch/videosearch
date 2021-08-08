import React from 'react'

export default function VideoDetail({video}) {

    if(!video)
    {

        return (

        <div>
           
        </div>
        );
    }
    const sorcesrc =`https://www.youtube.com/embed/${video.id.videoId}`;
    return (
     
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={sorcesrc}></iframe>
            </div>
            <div className="ui segment">
            <h4 className="">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}
