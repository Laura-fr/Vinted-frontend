import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);
  formData.append("picture", file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return token ? (
    <div className="publish">
      <h3>Vends ton article</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="file"
          className="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />

        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Décris ton article..."
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Marque"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Taille"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Couleur"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Etat"
          value={condition}
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Lieu"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Prix"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Publish;
