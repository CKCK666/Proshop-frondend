import axios from "axios";
import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_SUCCESS, MY_ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_DELIVERED_REQUEST, ORDER_DELIVERED_SUCCESS, ORDER_DELIVERED_FAIL} from "../constants/orderConstants"
import  host  from "../constants/apiConstants";



export const createOrder=(order)=>async(dispatch,getState)=>{


    try {
        dispatch({
           type:ORDER_CREATE_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                "context-type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            },
        }
      const {data}= await axios.post(`${host}/orders`,order,config)
      
      dispatch({
        type:ORDER_CREATE_SUCCESS,
        payload:data

        
     })
   

    } catch (error) {
       console.error(error)
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload:error.response && error.response.data.message 
            ?
            error.response.data.message : error.message,
        })
    }

}
export const getOrderdetails=(id)=>async(dispatch,getState)=>{


    try {
        dispatch({
           type:ORDER_DETAILS_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            },
        }
      const {data}= await axios.get(`${host}/orders/${id}`,config)
      
      dispatch({
        type:ORDER_DETAILS_SUCCESS,
        payload:data

        
     })
   

    } catch (error) {
      
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.response && error.response.data.message 
            ?
            error.response.data.message : error.message,
        })
    }

}

export const payOrder=(orderId,paymentResult)=>async(dispatch,getState)=>{


    try {
        dispatch({
           type:ORDER_PAY_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            },
        }
      const {data}= await axios.put(`${host}/orders/${orderId}/pay`,paymentResult,config)
      
      dispatch({
        type:ORDER_PAY_SUCCESS,
        payload:data

        
     })
   

    } catch (error) {
      
        dispatch({
            type:ORDER_PAY_FAIL,
            payload:error.response && error.response.data.message 
            ?
            error.response.data.message : error.message,
        })
    }

}

export const myOrdersList=()=>async(dispatch,getState)=>{


    try {
        dispatch({
           type:MY_ORDER_LIST_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
              
                Authorization:`Bearer ${userInfo.token}`
            },
        }
      const {data}= await axios.get(`${host}/orders/myOrders`,config)
      
      dispatch({
        type:MY_ORDER_LIST_SUCCESS,
        payload:data

        
     })
   

    } catch (error) {
      
        dispatch({
            type:MY_ORDER_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ?
            error.response.data.message : error.message,
        })
    }

}

export const listOrders=()=>async(dispatch,getState)=>{


    try {
        dispatch({
           type:ORDER_LIST_REQUEST
        })
        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
              
                Authorization:`Bearer ${userInfo.token}`
            },
        }
      const {data}= await axios.get(`${host}/orders`,config)
   
      dispatch({
        type:ORDER_LIST_SUCCESS,
        payload:data

        
     })
   

    } catch (error) {
       console.error(error)
        dispatch({
            type:ORDER_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ?
            error.response.data.message : error.message,
        })
    }

}

export const MakeDelivered = (id) => async (dispatch, getState) => {
   const delivered=true
    try {
      dispatch({ type: ORDER_DELIVERED_REQUEST })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
  
      const { data } = await axios.patch(
        `${host}/orders/${id}`,
        { isDelivered: delivered },
        config
      )
   
  
      dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: ORDER_DELIVERED_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  