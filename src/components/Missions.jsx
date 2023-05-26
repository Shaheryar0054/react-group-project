import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  missionsApi, fetchmissionDataProfile, joinMission, leaveMission,
} from './Redux/missionsSlice';
import '../styles/Missions.css';

function Missions() {
  const missionsData = useSelector((state) => state.mission.missions);
  const missionsDataProfile = useSelector((state) => state.mission.missionsDataProfile);
  console.log(missionsDataProfile);

  const dispatch = useDispatch();

  const handlejoinMission = (event) => {
    dispatch(joinMission(event.target.id));
  };

  const handleleaveMission = (event) => {
    dispatch(leaveMission(event.target.id));
  };

  useEffect(() => {
    dispatch(missionsApi());
    dispatch(fetchmissionDataProfile());
  }, [dispatch]);

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th className="none">none</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {missionsData && Array.isArray(missionsData) && missionsDataProfile.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td className="description">{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <div className="Activemember" id={mission.mission_id}>
                    Active Member
                  </div>
                ) : (
                  <div className="not-a-member" id={mission.mission_id}>
                    NOT A MEMBER
                  </div>
                )}
              </td>
              <td>
                {mission.reserved ? (
                  <button className="leaveMissionBtn" id={mission.mission_id} type="button" onClick={handleleaveMission}>
                    leaveMission
                  </button>
                ) : (
                  <button className=" joinMissionBnt" id={mission.mission_id} type="button" onClick={handlejoinMission}>
                    joinMission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
