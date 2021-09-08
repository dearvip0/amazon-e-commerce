import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import data from "../data";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const { data } = await axios.get("/api/products");
      try {
        setloading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
