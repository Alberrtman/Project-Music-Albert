import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const EditProduk = () => {
  const { id } = useParams();
  const history = useHistory();
  const [produk, setProduk] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dataProduk/" + id)
      .then((res) => setProduk(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduk((prevProduk) => ({
      ...prevProduk,
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
  //       `http://localhost:5000/api/dataProduk/${id}`, Produk
  //     );
  //     if (response.data) {
  //       alert(response.data.message);
  //       history("/dataProduk");
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
    formData.append("nm_produk", produk.nm_produk);
    formData.append("jenis_produk", produk.jenis_produk);
    formData.append("harga_produk", produk.harga_produk);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/dataProduk/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        alert(response.data.message);
        history("/dataProduk");
        return;
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Data Produk</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNama">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            name="nm_produk"
            value={produk.nm_produk}
            onChange={handleInputChange}
            placeholder="Masukkan nm_produk"
          />
        </Form.Group>
        <Form.Group controlId="formJenis">
          <Form.Label>Jenis Musik</Form.Label>
          <Form.Control
            type="text"
            name="jenis_produk"
            value={produk.jenis_produk}
            onChange={handleInputChange}
            placeholder="Masukkan jenis_produk"
          />
        </Form.Group>
        <Form.Group controlId="formHarga">
          <Form.Label>Harga Produk</Form.Label>
          <Form.Control
            type="text"
            name="harga_produk"
            value={produk.harga_produk}
            onChange={handleInputChange}
            placeholder="Masukkan Harga"
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

export default EditProduk;