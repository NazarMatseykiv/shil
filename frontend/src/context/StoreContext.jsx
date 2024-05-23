import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>
    {

        const [cartItems, setCartItems] = useState({});
        const url = "http://localhost:4000"
        const [token, setToken] = useState("");
        const [food_list, setFoodList] = useState([])

        const addCart = async (itemId) =>{
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
            if(token){
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            }
        }

        const removeCart = async (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            if(token){
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            }
        }
        const getTotalCart =() =>{
            let TotalCart = 0;
            for(const item in cartItems)
                {
                    if(cartItems[item]>0)
                        {
                        let iteInfo = food_list.find((product)=>product._id === item);
                        TotalCart += iteInfo.price* cartItems[item];
                        }
                }
                return TotalCart;
        }
        const fetchFoodList = async () =>{
            const response = await axios.get(url+"/api/food/list");
            setFoodList(response.data.data)
        }

        const loadCartData = async (token) =>{
            const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
            setCartItems(response.data.cardData);
        }

        useEffect(()=>{
            async function loadData(){
                await fetchFoodList();
                if(localStorage.getItem("token")){
                    setToken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                }
            }
            loadData();
        },[])

        const contextValue = {
           food_list,
           cartItems,
           setCartItems,
           addCart,
           removeCart,
           getTotalCart,
           url,
           token,
           setToken
        } 
        return(
                <StoreContext.Provider value={contextValue}>
                {props.children}
                </StoreContext.Provider>
            )
    }
export default StoreContextProvider