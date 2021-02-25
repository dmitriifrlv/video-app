import './searchComponent.css';
import SearchBar from '../searchBar/SearchBar';
import { Component } from 'react';
import axios from 'axios';
import VideoList from '../videoList/VideoList'



const KEY = 'AIzaSyCv8Do_zhzv1l4FoXVvLmD3C6FRRTjubg0';

const API = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: KEY
  }
})

class SearchComponent extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      videoQuery: '',
      videos: [],
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
    this.setState({input:e.target.value}, )
  }

  onButtonSubmit = async () => {
    const response = await API.get('/search', {
      params: {
        q: this.state.input
      }
    })
    console.log(response.data)
    this.setState({
      videos:response.data.items
    })
  }

  render(){
    return (
        <div className="searchComponent">
          <div className="searchComponent__searchBlock">
            <h1 className="searchComponent__searchBlock__title">Поиск видео</h1>
            <SearchBar 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
          </div>
        <div className="searchComponent__videoBlock">
          <VideoList videos={this.state.videos} />
        </div>
        </div>
      );
  }
  
}

export default SearchComponent;


