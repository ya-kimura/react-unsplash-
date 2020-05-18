import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css'

export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {
                user: {
                    name: "",
                    username: "",
                    portfolio_url: "",
                    profile_image: { small: "" },
                },
                urls: { regular: "" },
                links: { download: "" }
            }
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const key_api = '3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4';
        const response = await api.get(`/photos/${id}?client_id=${key_api}`);

        this.setState({ photo: response.data });
    }

    render() {
        const photo = this.state.photo
        console.log(photo)
        return (
            <div className="card">
                <div className="card_header">
                    <img src={photo.user.profile_image.small} alt="" className="media_obj" />
                </div>
                <div className="media_body">
                    <a href={photo.user.portfolio_url}>{photo.user.name}</a>
                </div>
                <div className="card_body card_body_wide">
                    <img src={photo.urls.regular} alt={photo.alt_description} />
                </div>
                <div className="footer_card">
                 <Link to='/' className="voltar">voltar</Link>
                </div>
            </div>
        );
    }
}