import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./utils";
import * as UserService from "./services/UserService";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slices/userSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // let storageData = localStorage.getItem("access_token");
    // // console.log("isJsonString(storageData): ", isJsonString(storageData));
    // if (storageData && isJsonString(storageData)) {
    //   storageData = JSON.parse(storageData);

    //   const decoded = jwtDecode(storageData);
    //   console.log("decoded", decoded);

    //   if (decoded?.id) {
    //     handleGetDetailUser(decoded?.id, storageData);
    //   }
    // }

    const { decoded, storageData } = handleDecoded();
    console.log("decoded", decoded);
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    console.log("storageData", storageData);
    let decoded = {};
    // console.log("isJsonString(storageData): ", isJsonString(storageData));
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);

      decoded = jwtDecode(storageData);
      console.log("handleDecoded decoded", decoded);

      // if (decoded?.id) {
      //   handleGetDetailUser(decoded?.id, storageData);
      // }
    }
    return {
      decoded,
      storageData,
    };
  };

  UserService.axiosJwt.interceptors.request.use(
    async (config) => {
      const currentTime = new Date().getTime() / 1000;
      const { decoded, storageData } = handleDecoded();
      console.log("storageData", storageData);
      console.log("decoded", decoded);
      console.log("decoded?.exp ", decoded?.exp);
      console.log("currentTime ", currentTime);
      console.log("decoded?.exp < currentTime ", decoded?.exp < currentTime);
      const res = await UserService.refreshToken(storageData);
      //  config.headers.Authorization = `Bearer ${res?.access_token}`;
      // if (decoded?.exp > currentTime) {
      //   const res = await UserService.refreshToken(storageData);
      //   // localStorage.setItem("access_token", JSON.stringify(res?.access_token));
      //   // handleGetDetailUser(decoded?.id, res?.access_token);
      //   config.headers.Authorization = `Bearer ${res?.access_token}`;
      //   // config.headers["token"] = `Bearer ${res?.access_token}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleGetDetailUser = async (userId, access_token) => {
    const res = await UserService.getDetailUser(userId, access_token);
    console.log("handleGetDetailUser res", res);
    dispatch(updateUser({ ...res.data, access_token }));
  };

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Layout = route.isShowHeader ? DefaultComponent : Fragment;
          const Page = route.page;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
