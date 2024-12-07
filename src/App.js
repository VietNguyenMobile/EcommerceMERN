import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  const fetchApi = async () => {
    console.log("fetchApi");
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-details/675402559c0a1f5b4b53afbc`
    );
    console.log("res", res);
    return res.data;
  };

  const query = useQuery({
    queryKey: "product",
    queryFn: fetchApi,
  });
  console.log("query", query);

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
