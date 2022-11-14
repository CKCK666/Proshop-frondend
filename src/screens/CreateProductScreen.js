import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader"
 import styled from "styled-components";
import { PrimaryButton } from "../components/CommonStyle";
import { createProduct } from "../actions/productAction";

const CreateProductScreen = () => {

  const dispatch = useDispatch();
const productCreated=useSelector((state)=>state.productCreated)
const {loading}=productCreated

  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const [  countInStock, setCountInStock] = useState("");

  const handleProductImageUpload = async(e) => {
    const file = e.target.files[0];
   
    TransformFileData(file);
  };

  const TransformFileData =async (file) => {
     const reader = new FileReader();
    
    if (file) {
     await reader.readAsDataURL(file);
      
      reader.onloadend = async() => {
        await setProductImg(reader.result);
        
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

   await dispatch(
      createProduct({
        name,
        brand,
        price,
        description,
        image: productImg,
        countInStock

      })
    )
   
     window.location.reload()
    
    
  
   
  };

  return (
   
    <StyledCreateProduct>
    
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
         <input
          type="text"
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
          required
        />
       
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          onChange={(e) => setDesc(e.target.value)}
          required
        />
            <input
          type="number"
          placeholder="Stock"
          onChange={(e) => setCountInStock(e.target.value)}
          required
        />

        <PrimaryButton type="submit">
      submit
        </PrimaryButton>
      </StyledForm>
      {loading &&<Loader/>}
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateProductScreen;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;