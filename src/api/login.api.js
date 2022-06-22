import axios from 'axios';


export const login = async (username, password) =>{
  try {
    const resp = await axios.post(`http://localhost:5000/api/v1/login`, 
    {
      username, 
      password
    },
    {
      withCredentials: true // need this for cookies to be saved by browser
    });
    return resp.data;
  } catch (err) {
    console.error(err.message);
  };
}