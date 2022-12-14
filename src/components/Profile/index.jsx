import React from "react";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import profileicon from '../../assets/profile.png'
import { profileNameActions } from "../../store/redux/userName";
import { dispatch } from "../../store/store";
import { useSelector } from "react-redux";

export default function Profile() {
  const [value, setUpdatedValue] = useState(false);
  const { id } = useSelector((state) => state.profileName);

  const getUserName = () => {
    let username = JSON.parse(localStorage.getItem("user"));
    return username;
  };

  const user = getUserName();

  const handleChange = (e) => {
    const userName = e.target.value;
    setUpdatedValue(userName);
  };

  const handleSubmitClick = (e) => {
    const response = axios
      .put(`http://localhost:3001/users/${id}`, {
        ...user,
        firstname: value,
      })
      .then((res) => {
       dispatch(profileNameActions.profileName(res.data.firstname))
      })
      .catch((e) => {
        return e.data;
      });
    return response;
  };

  return (
    <div>
      <div className="profile">
        <div className="input-group">
          <img src={profileicon} alt='profile'/>
          <label>Update User Name :</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <button className="primary" type="submit" onClick={handleSubmitClick}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
