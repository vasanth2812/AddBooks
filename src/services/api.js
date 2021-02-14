import axios from 'axios';
import { baseurl } from '../constant.json';

export default {
  fetchBooks: () => axios.get(`${baseurl}`).then((res) => res.data.items),
};
