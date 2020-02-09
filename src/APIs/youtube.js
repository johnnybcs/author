import axios from 'axios';

const KEY = 'AIzaSyBpzdGfqiHJj7VJBlZWKnPaLur8u4FMf3E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 50,
        key: KEY
    }
});