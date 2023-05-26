import { Link } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import axios from "axios";

  function FeatureProduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = () => {
      axios
        .get("http://localhost:5000/api/dataProduk")
        .then((response) => setData(response.data))
        .catch((err) => console.error(err));
    };

    return (
      <>
      {data.map((item) => (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div className="col w-100">
          <div className="card shadow-sm" key={item.id_produk}>
            <img
              className="card-img-top bg-dark cover"
              height="240"
              alt=""
              src={`http://localhost:5000/images/${item.gambar}`}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{item.nm_produk}</h5>
              <p className="card-text text-center text-muted">Rp {item.harga_produk}</p>
              <div className="d-grid gap-2">
              <Link to={`/products/${item.id_produk}`} className="btn btn-outline-dark" replace>
                  Detail
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
        ))}
      </>
    );
  }

  export default FeatureProduct;