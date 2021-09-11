import { authHeader } from "./authenticationApis";
export function getAdminBoard() {
  return axios.get("API_URL" + "admin", { headers: authHeader() });
}
