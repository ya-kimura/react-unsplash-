import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
      listImages: []
    };

    componentDidMount() {
       this.loadImages(); 
    }
    loadImages = async () => {
     
      const response = await api.get('https://api.unsplash.com/photos/random?per_page=5&client_id=3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4');
       
      this.setState({ listImages: response.data });
    };

    render() {
        return (
          <div className="images-list">
            {this.state.listImages.map(listImages => (
              <h2>{listImages.user}</h2>
            ))}
          </div>
        )
        
    }
} 
