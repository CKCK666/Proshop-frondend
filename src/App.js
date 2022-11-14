import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CartScreen from "./screens/CartScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen"
import UsersManage from "./screens/UsersManage";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import SearchBox from "./components/SearchBox";
import MakeDelivery from "./screens/MakeDelivery";
const App = () => {
  return (
   
     <Router>
      <Header/>
      <main className="py-3">
      <Container>
       
  <Routes>
    <Route path="/login" element={<LoginScreen/>}/>
    <Route path="/payment" element={<PaymentScreen/>}/>
    <Route path="/signup" element={<RegisterScreen/>}/>
    <Route path="/profile" element={<ProfileScreen/>} />
    <Route path="/admin/userlist" element={<UsersManage/>} />
    <Route path="/admin/order/:id" element={<MakeDelivery/>} />
    <Route path="/admin/edit/:id" element= {<ProductEditScreen/>} />                          
    <Route path="/admin/productlist" element={<ProductListScreen/>} />
    <Route path="/admin/orderlist" element={<OrderListScreen/>} />
    <Route path="/shipping" element={<ShippingScreen/>} />
    <Route path="/placeorder" element={<PlaceOrderScreen/>} />
     <Route path="/" element={<HomeScreen />} />
     <Route path="/search/:keyword" element={<HomeScreen />} />
     <Route path="/admin/createProduct" element={<CreateProductScreen/>} />
    
     <Route path="/product/:id" element={<SingleProductScreen/>} />
   
     <Route path="/cart/:id" element={<CartScreen/>} />
     
     <Route path="/cart" element={<CartScreen/>} />
     <Route path="/order/:id" element={<OrderDetailsScreen/>} />
     
     </Routes>
  
    
        
      </Container>
      
      
      </main>
     
      
   
    </Router>
  
  );
};

export default App;
