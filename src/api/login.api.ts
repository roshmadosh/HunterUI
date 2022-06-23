import axios from 'axios';


export const login = async (fields: { username: string, password: string, rememberMe: boolean }) => {
  const { username, password, rememberMe } = fields;
  console.log(rememberMe);
  try {
    const resp = await axios.post(`http://localhost:5000/api/v1/login`, 
    {
      username, 
      password,
      rememberMe,
    },
    {
      withCredentials: true // need this for cookies to be saved by browser
    });
    return resp.data;
  } catch (err: any) {
    console.error(err.message);
  };
}