import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { hash } from "bcryptjs";
import { useHistory } from "react-router-dom";

const TambahUser = () =>{
    const [user, setUser] = useState({
        username:"",
        nama: "",
        email: "",
        no_telp: "",
        role: "",
        foto: null,
        password: "",
    });
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "foto") {
            setUser({ ...user, foto: files[0] });
        } else {
            setUser({ ...user, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const hashedPassword = await hash(user.password, 10);
          const formData = new FormData();
          formData.append("username", user.username);
          formData.append("nama", user.nama);
          formData.append("email", user.email);
          formData.append("no_telp", user.no_telp);
          formData.append("role", user.role);
          formData.append("foto", user.foto); // tambahkan file gambar ke FormData
          formData.append("password", hashedPassword); // tambahkan password yang sudah di-hash ke FormData
          const response = await axios.post(
            "http://localhost:5000/api/dataUser",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response.data) {
            alert(response.data.message);
            setUser({ username:"", nama: "", email: "", no_telp: "", role: "", foto: null, password:"" });
            history("/dataUser");
          }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h1>Tambah Data User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                <Form.Label>username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Masukkan Username"
                />
                </Form.Group>
                <Form.Group controlId="formNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                    type="text"
                    name="nama"
                    value={user.nama}
                    onChange={handleChange}
                    placeholder="Masukkan Nama"
                />
                </Form.Group>
                <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                />
                </Form.Group>
                <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Masukkan password"
                />
                </Form.Group>
                <Form.Group controlId="formTelp">
                <Form.Label>no_telp</Form.Label>
                <Form.Control
                    type="text"
                    name="no_telp"
                    value={user.no_telp}
                    onChange={handleChange}
                    placeholder="Masukkan no_telp"
                />
                </Form.Group>
                <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    placeholder="Masukkan role"
                />
                </Form.Group>
                <Form.Group controlId="formGambar">
                    <Form.Label>Gambar</Form.Label>
                    <Form.Control
                    type="file"
                    name="foto"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                Simpan
                </Button>
            </Form>
        </div>
    );
}

export default TambahUser;