import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RelatedProduct(props) {
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
      {data
        .filter((item) => item.id_produk !== props.excludedId)
        .map((item) => (
          <Link
            key={item.id_produk}
            to={`/products/${item.id_produk}`}
            className="col text-decoration-none"
            href="!#"
            replace
          >
            <div className="card shadow-sm">

              <img
                className="card-img-top bg-dark cover"
                height="200"
                alt=""
                src={`http://localhost:5000/images/${item.gambar}`}
              />
              <div className="card-body">
                <h5 className="card-title text-center text-dark text-truncate">
                  {item.nm_produk}
                </h5>
                <p className="card-text text-center text-muted">
                  Rp. {item.harga_produk}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export default RelatedProduct;