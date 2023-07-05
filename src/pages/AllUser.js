import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { database } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AllUser() {
  const [users, setUSers] = useState([]);

  const getUsers = async () => {
    let arrUsers = [];
    let dataUsersRef = collection(database, "users");
    let compileData = await getDocs(dataUsersRef).then((res) => {
      res.forEach((e) => {
        arrUsers.push(e.data());
      });
    });
    return arrUsers;
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUSers(res);
    });
  }, []);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  // function getUsers() {
  //   const usersCollectionRef = collection(database, "users");
  //   getDocs(usersCollectionRef)
  //     .then((response) => {
  //       // console.log(response);
  //       const usrs = response.docs.map((doc) => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));
  //       setUSers(usrs);
  //     })
  //     .catch((error) => console.log(error.message));
  // }

  return (
    <>
      <h1>LEADERBOARDS</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.score}</td>

            </tr>
          ))}

          {/* {users.map((user) => {
            <tr>
              <td>user.data.username</td>
            </tr>;
          })} */}
          {/* <tr>
            <td>1</td>
            {users.map((user) => (
              <td>{user.data.username}</td>
            ))}

            <td>Otto</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Warkind</td>
            <td>3</td>
          </tr> */}
        </tbody>
      </Table>
    </>
  );
}

