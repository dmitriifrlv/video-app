import axios from 'axios';
const KEY = 'AIzaSyCv8Do_zhzv1l4FoXVvLmD3C6FRRTjubg0';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: KEY
  }
})