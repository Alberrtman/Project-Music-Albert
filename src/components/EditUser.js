import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dataUser/" + id)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:5000/api/dataUser/${id}`, User
  //     );
  //     if (response.data) {
  //       alert(response.data.message);
  //       history("/dataUser");
  //       return;
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // prepare form data
    const formData = new FormData();
    formData.append("foto", selectedFile);
    formData.append("username", user.username);
    formData.append("nama", user.nama);
    formData.append("email", user.email);
    formData.append("no_telp", user.no_telp);
    formData.append("role", user.role);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/dataUser/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        alert(response.data.message);
        history("/dataUser");
        return;
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Data User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Masukkan Username"
          />
        </Form.Group>
        <Form.Group controlId="formNama">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={user.nama}
            onChange={handleInputChange}
            placeholder="Masukkan Nama"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Masukkan email"
          />
        </Form.Group>
        <Form.Group controlId="formTelp">
          <Form.Label>no_telp</Form.Label>
          <Form.Control
            type="text"
            name="no_telp"
            value={user.no_telp}
            onChange={handleInputChange}
            placeholder="Masukkan no_telp"
          />
        </Form.Group>
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={user.role}
            onChange={handleInputChange}
            placeholder="Masukkan role"
          />
        </Form.Group>
        <Form.Group controlId="formGambar">
          <Form.Label>Gambar</Form.Label>
          <Form.Control type="file" name="foto" onChange={handleImageChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Simpan
        </Button>
      </Form>
    </div>
  );
};

export default EditUser;