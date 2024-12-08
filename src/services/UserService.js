import axios from "axios";

const loginUser = async (data) => {
  console.log("loginUser API data : ", data);
  console.log("process.env.REACT_APP_API_URL : ", process.env.REACT_APP_API_URL);
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

export { loginUser, signUpUser };
