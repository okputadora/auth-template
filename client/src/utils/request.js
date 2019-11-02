import axios from 'axios'

export default axios.create({
  baseURL: 'https://localhost:4000', // @TODO make this dynamic based on env
  timeout: 1000,
});