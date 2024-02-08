import "./App.css";
import Login from "./Login";
import Shop from "./Shop";
import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Cart from "./components/Cart";

import Payment from "./components/Payment";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/getmobile" element={<Menu />} />
        <Route path="/cartitems" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;



