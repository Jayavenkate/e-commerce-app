/* eslint-disable react/prop-types */
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useCart } from "../context/context";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const { cartitem, setCartitem } = useCart();

    const navigate = useNavigate("");
    const removeFromCart = (indexToRemove) => {
        setCartitem(cartitem.filter((_, index) => index !== indexToRemove));
    };

    // Function to calculate total
    const calculateTotal = () => {
        let total = 0;
        cartitem.forEach(item => {
            total += parseFloat(item.price);
        });
        return total;
    };

    return (
        <>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px",
                }}
            >
                {cartitem.length === 0 && (
                    <div style={{ textAlign: "center" }}>
                        <h3>No items are added</h3>
                    </div>
                )}
                {cartitem.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "300px",
                            margin: "0 auto",
                        }}
                    >
                        <img src={item.image} alt={item.name} style={{ width: "70px" }} />
                        <h5>{item.name}</h5>
                        <h5>{item.price} Rs/-</h5>
                        <Button onClick={() => removeFromCart(index)}><DeleteIcon /></Button>
                    </Card>
                ))}
                <div>
                    {cartitem.length > 0 && (
                        <h3 style={{ textAlign: "center" }}>Total: {calculateTotal()} Rs/-</h3>
                    )}

                </div>
                {cartitem.length > 0 && (
                    <Button
                        style={{ width: "100px", margin: "0 auto" }}
                        variant="contained"
                        onClick={() => navigate("/payment")}
                    >
                        Pay
                    </Button>
                )}
            </div>

        </>
    );
};
export default Cart;

