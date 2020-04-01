import React from "react";
import { connect } from "react-redux";
import { Container, Tabs, Tab } from "react-bootstrap";
import {startUpdateUser,startGetOneUser} from '../actions/userActions'
function TableData(props) {
  const handleChange = status => {
    handleCheck(status);

    // console.log(status)
  };

 const handleDetails=(user)=>{
  return  this.props.dispatch(startGetOneUser(user._id))
   
}

  const handleCheck = status => {
    if (status == "applied") {
      return (
        <div>
          {" "}
          <button onClick={() => handleChange("shortlisted")}>
            shortlisted
          </button>
          <button onClick={() => handleChange("rejected")}>Reject</button>
        </div>
      );
    } else if (status == "shortlisted") {
      return (
        <div>
          {" "}
          <button>shortlisted</button>
        </div>
      );
    } else if (status == "rejected") {
      return (
        <div>
          {" "}
          <button>rejected</button>
        </div>
      );
    }
  };
  return (
    <div>
      {props.users ? (
        <div>
          <h2>{`List of candidates applied for ${props.type}`}</h2>
          <table border="2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Technical Skills</th>
                <th>Experience</th>
                <th>Applied Date</th>
                <th>View Details</th>
                <th>Update Application status</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.skills}</td>
                    <td>{user.experience}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <button onClick={() => handleDetails(user)}>
                        View Details
                      </button>
                    </td>
                    <td>{handleCheck(user.status)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p>loading....</p>
        </div>
      )}{" "}
    </div>
  );
}

export default TableData;
