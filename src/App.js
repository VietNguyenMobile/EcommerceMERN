import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import routes from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";

function App() {
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
