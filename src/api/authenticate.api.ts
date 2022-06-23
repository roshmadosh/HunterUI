import axios from 'axios';


export const authenticate = async () => {
  try {
    const resp = await axios.get(`/api/v1/login`);
    return resp.data;
  } catch (err: any) {
    console.error(err.message);
  };
}