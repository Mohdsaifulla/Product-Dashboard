import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Login from "./components/Login";
import NewPage from "./components/NewPage";
import Single from "./components/Single";
import { productInputs, userInputs } from "./api/formData";
import ProductPage from "./components/ProductPage";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((resp) => resp.json())
      .then((data) => setData(data.products))
      .catch((err) => console.err("errorrrrrr"));
  }, []);
  // console.log(data)
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route
                path="newpage"
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="/products">
              <Route index element={<List />} />
              <Route
                path="newpage"
                element={
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
          <Route path="productpage" element={<ProductPage data={data} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
