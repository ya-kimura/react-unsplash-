import React from 'react';

const Card = () => {
  return (

    <div className="card">
      <div className="card_header">
        <img src={photo.user.profile_image.small} alt="" className="media_obj" />
      </div>
      <div className="media_body">
        <a href={photo.user.portfolio_url} target="_blank">{photo.user.name}</a>
      </div>
      <div className="card_body">
        <Link to={`/photos/${photo.id}`}><img src={photo.urls.small} alt={photo.alt_description} /></Link>
      </div>
    </div>
  )
}
