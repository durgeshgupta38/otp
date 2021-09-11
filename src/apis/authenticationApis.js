import axios from "./baseAxios";
import queryString from "query-string";
export async function registerUser(name, email, password) {
  let reqData = queryString.stringify({
    email: email,
    name: name,
    password: password,
    confirm_password: password,
  });
  console.log("****url encoded data****");
  console.log(reqData);
  try {
    const res = await axios.post("/user/register", reqData);
    console.log("Rsponse ", res);
    return res;
  } catch (err) {
    console.log("Error ", err);
    throw new Error(err);
  }
}
export async function activateUser(token) {
  console.log("****activat user getting called");
  let response = await axios.get(`/user/activate/${token}`);
  return response;
}
// export function registerUserJson(name, email, password) {
//     let reqData = JSON.stringify({
//         "email": email,
//         "name": name,
//         "password": password,
//         "confirm_password": password
//     })
//     console.log("****JSON DATA***");
//     console.log(reqData);
//     return axios.post('/user/register',reqData);
//     // console.log("*********Got the Data*******");

// }

export function loginUser(email, password) {
  console.log("****api call to login*** with details ***", email, password);
  return axios
    .post("/user/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(
        "************************Getting the response from login *****",
        response
      );
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    })
    .catch((error) => {
      console.log("Error in login", error);
      throw new Error(error);
    });
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { "x-access-token": user.token };
  } else {
    return {};
  }
}

export async function passwordReset(email) {
  console.log("inside password reset");
  let reqData = queryString.stringify({
    email: email,
  });
  try {
    const res = await axios.post("/user/passwordResetMail", reqData);
    console.log("Rsponse ", res);
    return res;
  } catch (err) {
    console.log("Error ", err);
    throw new Error(err);
  }
}

export async function changePassword(userId, password, confirmPassword) {
  console.log("inside set password", userId);
  let reqData = queryString.stringify({
    email: userId,
    newPassword: password,
    rePassword: confirmPassword,
  });
  try {
    const res = await axios.post(`/user/reset/${userId}`, reqData);
    return res;
  } catch (err) {
    console.log("Error ", err);
    throw new Error(err);
  }
}
