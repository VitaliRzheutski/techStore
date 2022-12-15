import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsersThunk } from "../redux/allUsers";

const AllUsers = (props) => {
  const users = props.users;

  useEffect(() => {
    props.loadAllUsers();
  }, []);

  return (
    <div className="">
      <p>List of users:</p>
      <ol>
        {props.users.map((user) => (
          <div className="" key={user.id}>
            <li>
              {user.firstName} {user.lastName}
              <p>{user.email}</p>
            </li>
          </div>
        ))}
      </ol>
      <p>Total users: {users.length}</p>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.allUsers,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadAllUsers: () => dispatch(getAllUsersThunk()),
  };
};
export default connect(mapState, mapDispatch)(AllUsers);
