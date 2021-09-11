import {authHeader} from "./authenticationApis";
 
 export function getUserBoard() {
    return axios.get("API_URL" + 'user', { headers: authHeader() });
  }

