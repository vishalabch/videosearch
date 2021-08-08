import axios from 'axios'

const KEY='AIzaSyCSKyTd1yvM-bM4Ez7PZv0hb4S1Z5TXeMc';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params : {
        part:'snippet',
        maxResults:5,
        key:KEY,
        type: 'video'

    }
})