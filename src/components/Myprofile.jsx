import '../styles/Myprofile.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionsApi, fetchmissionDataProfile } from './Redux/missionsSlice';

const MyProfileComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionsApi());
    dispatch(fetchmissionDataProfile());
  }, [dispatch]);

  const reservedRockets = useSelector((state) => state.rockets.rocketDataProfile
    .filter((rocket) => rocket.reserved === true));
  const missionsDataprofile = useSelector((state) => state.mission.missionsDataProfile);
  const dt = missionsDataprofile.filter((mission) => mission.reserved === true);

  return (
    <div className="mainProfile">
      <div className="listreserved">
        <h2 className="titleReservedMission">My missions</h2>
        <hr className="line" />

        {dt.map((mission) => (
          <td className="td" key={mission.mission_id}>{mission.mission_name}</td>
        ))}
      </div>
      <div className="listreserved">
        <h2>My Rockets</h2>
        <hr className="line" />
        {reservedRockets.map((rocket) => (
          <td className="td" key={rocket.id}>{rocket.name}</td>
        ))}
      </div>
    </div>
  );
};

export default MyProfileComponent;
