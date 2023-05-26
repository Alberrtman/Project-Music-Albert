import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const DataBanner = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/dataBanner")
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };

  const handleEdit = (id) => {
    history(`/dataBanner/editBanner/${id}`);
  };

  const handleTambah = () => {
    history(`/dataBanner/tambahBanner`);
  };

const handleDelete = (id, gambar) => {
  const confirmDelete = window.confirm("Anda yakin ingin menghapus Banner ini?");
  if (confirmDelete) {
    axios
      .delete(`http://localhost:5000/api/dataBanner/${id}`)
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
      <h1>Data Banner</h1>
      <Button
        onClick={() => handleTambah()}
        className="mb-2"
        variant="outline-primary"
      >
        Tambah Banner
      </Button>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Nama</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_banner}>
              <td>{item.nm_banner}</td>
              <td>
                <img
                  src={`http://localhost:5000/images/${item.gambar}`}
                  alt={item.nm_banner}
                  width="120"
                  height="170"
                />
              </td>
              <td>
                <button onClick={() => handleEdit(item.id_banner)}>Edit</button>
                <button onClick={() => handleDelete(item.id_banner, item.gambar)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataBanner;