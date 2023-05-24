import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionsApi } from './Redux/missionsSlice';
import '../styles/Missions.css';

function Missions() {
  const missions = useSelector((state) => state.mission.missions);

  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionsApi());
  }, []);

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>status</th>
            <th className="none">none</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td className="decription">{mission.description}</td>
              <td>
                <button type="button" className="NotBtn">NOT A MEMBER</button>
                {' '}
              </td>
              <td>
                <button type="button" className="JoinBtn"> Join mission</button>
                {' '}
              </td>
              {/* Add more table cells with corresponding data */}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Missions;
