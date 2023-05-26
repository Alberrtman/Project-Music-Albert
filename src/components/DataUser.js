import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const DataUser = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/dataUser")
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };

  const handleEdit = (id) => {
    history(`/dataUser/editUser/${id}`);
  };

  const handleTambah = () => {
    history(`/dataUser/tambahUser`);
  };

  const handleDelete = (id, gambar) => {
    const confirmDelete = window.confirm(
      "Anda yakin ingin menghapus User ini?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:5000/api/dataUser/${id}`)
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
      <h1>Data User XI TIP</h1>
      <Button
        onClick={() => handleTambah()}
        className="mb-2"
        variant="outline-primary"
      >
        Tambah User
      </Button>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>username</th>
            <th>Foto</th>
            <th>Nama</th>
            <th>email</th>
            <th>No Telp</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_user}>
              <td>{item.username}</td>
              <td>
                <img
                  src={`http://localhost:5000/images/${item.gambar}`}
                  alt={item.nama}
                  width="70"
                  height="140"
                />
              </td>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>{item.no_telp}</td>
              <td>{item.role}</td>
              <td>
                <button onClick={() => handleEdit(item.id_user)}>Edit</button>
                <button onClick={() => handleDelete(item.id_user, item.gambar)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataUser;