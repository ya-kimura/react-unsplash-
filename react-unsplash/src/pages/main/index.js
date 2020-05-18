import React, { Component } from 'react';
//import { Card, CardMedia, CardTitle, CardText, } from 'react-toolbox/lib/card';
import api from '../../services/api';
import './style.css'


export default class Main extends Component {
    state =  {
      photos: []
    };

    componentDidMount() {
       this.loadImages(); 
    }
    loadImages = async () => {
      const key_api = '3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4';
      const response = await api.get(`https://api.unsplash.com/search/photos?query=dogs&client_id=${key_api}`);
      console.log(response.data)
      this.setState({ photos: response.data.results });
      
    };

    render() {
      const { photos } = this.state
      return (
        <div className="grid">
          { photos.map(photo => 
            <div key={photo.id} className="grid_item ">
            <div className="card">
            <div className="card_header">
              <img src={photo.user.profile_image.small} alt="" className="media_obj"/>
            </div>
            <div className="media_body">
          <a href={photo.user.portfolio_url} target="_blank">{ photo.user.name }</a>
            </div>
            <div className="card_body">
             <img src={photo.urls.small} alt="" />
            </div> 
          </div>
          </div>
            
         )}
          </div>
        );
    };
}; 


