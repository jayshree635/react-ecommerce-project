import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css'
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem('user');
  //   if (auth) {
  //     navigate('/Login')
  //   }
  // })

  const collectData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/add-product", {
        method: "post",
        body: JSON.stringify({ name, category, price, company }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // if (!name || !category || !price || !company) {
      //   alert("Please fill in all the required fields.");
      //   return;
      // }

      if (response) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        // navigate('/');
      } else {
        alert("please enter data");
      }
    } catch (error) {
      alert("please enter data");
      console.error("An error occurred while registering:", error);
    }
  }

  return (
    <div className='register'>

      <h1>Add Product</h1>

      <form className='formData'>

        <label>Name:</label>
        <input className='inputBox' type="text"
          id="name" name="userName" placeholder='Enter Product Name' />

        <label>Price:</label>
        <input className='inputBox' type="text"
          id="email" name="email" placeholder='Enter Product Price' />

        <label>Category:</label>
        <input className='inputBox' type='text'
          name="password" placeholder='Enter Product category' />

        <label>Company:</label>
        <input className='inputBox' type='text'
          name="password" placeholder='Enter Product company' />

        <button onClick={collectData} type="submit">Submit</button>
      </form>

    </div>
  )
}

export default AddProduct
