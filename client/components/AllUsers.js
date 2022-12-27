import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsersThunk } from "../redux/allUsers";

const AllUsers = (props) => {
  const users = props.users;

  useEffect(() => {
    props.loadAllUsers();
  }, []);

  return (
    <div>
      <h3 id="users-title">There are {users.length} users:</h3>
      <div className="users">
        {props.users.map((user) => (
          <div className="singleUser" key={user.id}>
            <img
              className="img-user "
              src="https://e7.pngegg.com/pngimages/113/20/png-clipart-computer-icons-icon-design-others-public-relations-business.png"
            />
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
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
