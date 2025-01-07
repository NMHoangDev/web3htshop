import React, { useState } from "react";
import { useAppContext } from "../../context/appContext.js";

function Admin() {
  const { addProduct, getAllProduct } = useAppContext();

  const initialValues = {
    name: "",
    urlImg: "",
    desc: "",
    material: "",
    quantity: 0,
    price: 0,
    type: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleSubmit = async (e) => {
    const { name, urlImg, desc, material, quantity, price, type } = values;
    const currentProduct = {
      name,
      urlImg,
      desc,
      material,
      quantity,
      price,
      type,
    };

    e.preventDefault();
    console.log(currentProduct);
    const result = await addProduct(currentProduct);
    alert("success", result);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (erorr) => {
        reject(erorr);
      };
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setValues({ ...values, urlImg: base64 });
  };
  return (
    <div className="wrapper">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={values.urlImg} alt="HInhf anhr" />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={(e) => handleChange(e)}
          maxLength={25}
          minLength={10}
        />
        <input
          type="file"
          placeholder="urlImg"
          name="urlImg"
          accept=".jpg, .png, .jpg, .jpeg"
          onChange={(e) => handleFileUpload(e)}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          value={values.desc}
          onChange={(e) => handleChange(e)}
          maxLength={50}
          min={30}
        />
        <input
          type="text"
          placeholder="material"
          name="material"
          onChange={(e) => handleChange(e)}
          value={values.material}
        />
        <input
          type="text"
          placeholder="type"
          name="type"
          onChange={(e) => handleChange(e)}
          value={values.type}
        />
        <label htmlFor="price">Price</label>

        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={(e) => handleChange(e)}
          value={values.price}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          onChange={(e) => handleChange(e)}
          value={values.quantity}
        />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          getAllProduct();
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Admin;
