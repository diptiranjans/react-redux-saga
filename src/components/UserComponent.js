import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/userActions";
const UserComponent = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  // const [users, setUsers] = useState([]);

  // const fetchUser = () => {
  //   console.log("fetchUser");

  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => res.json())
  //     .then(response => {
  //       //console.log(response);
  //       setUsers(response);
  //       // console.log(users);
  //     });
  // };
  console.log(users);
  const { userList } = users;
  return (
    <>
      <div>UserComponent</div>
      <button onClick={() => dispatch(fetchUser())}>Click to fetch User</button>
      {userList &&
        userList.map(x => {
          return (
            <div key={x.id}>
              <h3>{x.name}</h3>
              <h5>{x.email}</h5>
            </div>
          );
        })}
      {/* {users &&
        users.map(x => {
          return (
            <div key={x.id}>
              <h5>{x.name}</h5>
              <h4>{x.email}</h4>
            </div>
          );
        })} */}
    </>
  );
};

export default UserComponent;
