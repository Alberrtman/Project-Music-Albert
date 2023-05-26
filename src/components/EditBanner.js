import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const EditBanner = () => {
  const { id } = useParams();
  const history = useHistory();
  const [banner, setBanner] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dataBanner/" + id)
      .then((res) => setBanner(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBanner((prevBanner) => ({
      ...prevBanner,
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
  //       `http://localhost:5000/api/dataBanner/${id}`, Banner
  //     );
  //     if (response.data) {
  //       alert(response.data.message);
  //       history("/dataBanner");
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
    formData.append("nm_banner", banner.nm_banner);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/dataBanner/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        alert(response.data.message);
        history("/dataBanner");
        return;
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Data Banner</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNama">
          <Form.Label>Nama Banner</Form.Label>
          <Form.Control
            type="text"
            name="nm_banner"
            value={banner.nm_banner}
            onChange={handleInputChange}
            placeholder="Masukkan Nama Banner"
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

export default EditBanner;