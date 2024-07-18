import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/actions";

const UsersContainer = ({ loading, users, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  } else {
    return error !== "" ? (
      <div>error: {error}</div>
    ) : (
      <div>
        users:
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
