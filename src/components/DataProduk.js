import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const DataProduk = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/dataProduk")
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };

  const handleEdit = (id) => {
    history(`/dataProduk/editProduk/${id}`);
  };

  const handleTambah = () => {
    history(`/dataProduk/tambahProduk`);
  };

const handleDelete = (id, gambar) => {
  const confirmDelete = window.confirm("Anda yakin ingin menghapus Produk ini?");
  if (confirmDelete) {
    axios
      .delete(`http://localhost:5000/api/dataProduk/${id}`)
      .then(() => {
        if (gambar) {
          axios
            .delete(`http://localhost:5000/api/images/${gambar}`)
            .catch((err) => console.error(err));
        }
        fetchData();
      })
      .catch((err) => console.error(err));
  }
};



  return (
    <div>
      <h1>Data Produk XI TIP</h1>
      <Button
        onClick={() => handleTambah()}
        className="mb-2"
        variant="outline-primary"
      >
        Tambah Produk
      </Button>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Nama</th>
            <th>Foto</th>
            <th>Jenis</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_produk}>
              <td>{item.nm_produk}</td>
              <td>
                <img
                  src={`http://localhost:5000/images/${item.gambar}`}
                  alt={item.nm_produk}
                  width="120"
                  height="170"
                />
              </td>
              <td>{item.jenis_produk}</td>
              <td>{item.harga_produk}</td>
              <td>
                <button onClick={() => handleEdit(item.id_produk)}>Edit</button>
                <button onClick={() => handleDelete(item.id_produk, item.gambar)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataProduk;