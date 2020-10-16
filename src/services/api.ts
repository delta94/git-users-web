import axios from 'axios';

const token = process.env.REACT_APP_GIT_TOKEN;

const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
};

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: token ? headers : {}
});

export default api;
