// src/components/PlaceDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PlaceDetails.css';

const PlaceDetails = ({ places }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find((place) => place.id === parseInt(id));

  if (!place) return <p>Place not found</p>;

  return (
    <div className="place-details">
      <h2>{place.alt}</h2>
      <img src={place.src} alt={place.alt} className="place-details-image" />
      <p>{place.details}</p>
      <button onClick={() => alert('Booking place...')}>Book Now</button>
      <button onClick={() => navigate(-1)}>Close</button>
    </div>
  );
};

export default PlaceDetails;
