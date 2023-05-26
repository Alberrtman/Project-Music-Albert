import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const TambahProduk = () =>{
    const [produk, setProduk] = useState({
        nm_produk:"",
        jenis_produk: "",
        harga_produk: "",
        foto: null,
    });
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "foto") {
            setProduk({ ...produk, foto: files[0] });
        } else {
            setProduk({ ...produk, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("nm_produk", produk.nm_produk);
          formData.append("jenis_produk", produk.jenis_produk);
          formData.append("harga_produk", produk.harga_produk);
          formData.append("foto", produk.foto); // tambahkan file gambar ke FormData
          const response = await axios.post(
            "http://localhost:5000/api/dataProduk",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response.data) {
            alert(response.data.message);
            setProduk({ nm_produk:"", jenis_produk: "", harga_produk: "", foto: null });
            history("/dataProduk");
          }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h1>Tambah Data Produk</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                    type="text"
                    name="nm_produk"
                    value={produk.nm_produk}
                    onChange={handleChange}
                    placeholder="Masukkan Nama"
                />
                </Form.Group>
                <Form.Group controlId="formJenis">
                <Form.Label>Jenis</Form.Label>
                <Form.Control
                    type="text"
                    name="jenis_produk"
                    value={produk.jenis_produk}
                    onChange={handleChange}
                    placeholder="Masukkan Jenis"
                />
                </Form.Group>
                <Form.Group controlId="formHarga">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                    type="text"
                    name="harga_produk"
                    value={produk.harga_produk}
                    onChange={handleChange}
                    placeholder="Masukkan Harga"
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

export default TambahProduk;