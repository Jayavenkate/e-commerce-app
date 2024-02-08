/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartitem, setCartitem] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {

        setIsLoggedIn(true);
    };
    const logout = () => {

        setIsLoggedIn(false);
    };
    return (
        <CartContext.Provider value={{ cartitem, setCartitem, isLoggedIn, logout, login }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
