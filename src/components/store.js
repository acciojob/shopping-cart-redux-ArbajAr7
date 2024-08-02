import { configureStore } from "@reduxjs/toolkit";
import  Allslice  from "../state/Allproductslice.js";
import Cart from "../state/Cart.js";
import Wishlist from "../state/Wishlist.js";
export default configureStore({
    reducer:{
        total:Allslice,
        cart:Cart,
        list:Wishlist
    }
})