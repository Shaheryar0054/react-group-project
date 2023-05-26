import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRocketsData, reserveRocket, fetchRocketsDataProfile, cancelRocketReservation,
} from './Redux/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets.rocketData);
  const RocketsDataProfile = useSelector((state) => state.rockets.rocketDataProfile);

  const dispatch = useDispatch();

  const handleReserveRocket = (event) => {
    dispatch(reserveRocket(event.target.id));
  };

  const handleCancelRocketReservation = (event) => {
    dispatch(cancelRocketReservation(event.target.id));
  };

  useEffect(() => {
    dispatch(fetchRocketsData());
    dispatch(fetchRocketsDataProfile());
  }, [dispatch]);

  return (
    <div className="rocket-container">
      {rocketData && Array.isArray(rocketData) && RocketsDataProfile.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-details">
            <h3 className="rocket-name">{rocket.name}</h3>
            <p className="rocket-description">
              {' '}
              {rocket.reserved ? (
                <button className="appearBtn" id={rocket.id} type="button">
                  Reserved
                </button>
              ) : (
                <span className="nonepart">d</span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button className="cancel-button" id={rocket.id} type="button" onClick={handleCancelRocketReservation}>
                Cancel Reservation
              </button>
            ) : (
              <button className="reserve-button" id={rocket.id} type="button" onClick={handleReserveRocket}>
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
