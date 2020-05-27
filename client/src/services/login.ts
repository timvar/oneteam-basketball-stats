import axios from 'axios';
import { LoginInput } from '../store/user/types';

const baseUrl = '/api/login';

const login = async (credentials: LoginInput) => {
  return (await axios.post(baseUrl, credentials)).data;
};

export default { login };
