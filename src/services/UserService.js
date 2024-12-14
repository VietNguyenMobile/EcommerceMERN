import axios from "axios";

const axiosJwt = axios.create();

const loginUser = async (data) => {
  console.log("loginUser API data : ", data);
  console.log(
    "process.env.REACT_APP_API_URL : ",
    process.env.REACT_APP_API_URL
  );
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-in`,
    data
  );
  return res.data;
};

const signUpUser = async (data) => {
  console.log("signUpUser API data : ", data);

  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-up`,
    data
  );
  return res.data;
};

const getDetailUser = async (userId, access_token) => {
  console.log("getDetailUser API userId : ", userId);

  const res = await axiosJwt.get(
    `${process.env.REACT_APP_API_URL}/user/get-details/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

const refreshToken = async (access_token) => {
  console.log("refreshToken API access_token : ", access_token);
  const res = await axiosJwt.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`,
    {
      withCredentials: true, // send cookies when cross-domain requests
      headers: {
        Authorization: `Bearer ${access_token}`,
        token: `Bearer ${access_token}`,
      },
    }
  );

  console.log("refreshToken API res", res);

  return res.data;
};

export { axiosJwt, loginUser, signUpUser, getDetailUser, refreshToken };
