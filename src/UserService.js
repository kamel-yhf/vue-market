import axios from "axios";

const url = "http://localhost:5000/users/";

/* eslint-disable no-async-promise-executor */

class UserService {
  // get User
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((User) => ({
            ...User,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create User
  static createUser(User) {
    return axios
      .post(url, User)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //delete User
  static deleteUser(id) {
    return axios.delete(`${url}${id}`);
  }

  //update User
  static updateUser(id, User) {
    return axios
      .put(`${url}${id}`, User)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default UserService;