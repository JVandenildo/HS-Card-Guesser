import axios from "axios";

const api = axios.create({
  baseURL: "api.hearthstonejson.com/v1/latest/",
});

export default api;
