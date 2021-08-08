import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos,onVideoSelect}) {
     const listItems = videos.map((vide) =>
    <VideoItem key={vide.id.videoId}
              video={vide}
              onVideoSelect={onVideoSelect} />
  );
    return (
        <div className="ui relaxed divided list">
           {listItems}
        </div>
    )
}
