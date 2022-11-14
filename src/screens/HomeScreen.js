import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams ,useNavigate} from 'react-router-dom';
import {Row,Col } from "react-bootstrap";
import Product from "../components/Product"
import Message from '../components/Message';
import Loader from '../components/Loader';

import { listProducts } from '../actions/productAction';
import { PRODUCT_LIST_RESET } from '../constants/productConstants';

const HomeScreen = () => {
  const navigate=useNavigate()
  const userLogin=useSelector(state=>state.userLogin)
  const{userInfo}=userLogin
 

  const params=useParams()
  const keyword=params.keyword
 
  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
  const{loading,error,products}=productList
 
 
  useEffect(()=>{
    if(userInfo && userInfo.isAdmin){
      navigate("/admin/productlist")
     }
   dispatch({type:PRODUCT_LIST_RESET})
   dispatch(listProducts(keyword))

  },[dispatch,keyword,navigate,userInfo])
  
  return (
      <>
      
      <h1>Latest Products</h1>
      {loading ? (<Loader/>) : error ? (<Message variant="danger">{error}</Message>):(
        <Row>
      
      
      {products.map((product)=>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      
        <Product product={product}/>
         </Col>
      ))}
  
</Row>)

      }

    
      </>
    
    

  )
}

export default HomeScreen