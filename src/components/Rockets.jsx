import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from './Redux/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <div className="rocket-container">
      {rocketData.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-details">
            <h3 className="rocket-name">{rocket.name}</h3>
            <p className="rocket-description">{rocket.description}</p>
            <button className="reserve-button" type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
