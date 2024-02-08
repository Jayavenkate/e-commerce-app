/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useCart } from "../context/context";
import { Api } from "../api/global";

const Menu = () => {
    const { cartitem, setCartitem } = useCart();
    const [mobile, setMobile] = useState([]);

    const navigate = useNavigate();
    const addtocart = (item) => {
        console.log(item);
        setCartitem([...cartitem, item]);
    };

    //checkauth
    function checkAuth(data) {
        if (data.status === 401) {
            navigate("/login");
            throw Error("unauthorized");
        } else {
            return data.json();
        }
    }
    //getmobiledata

    const getMobile = () => {
        fetch(`${Api}/getmobile`, {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        })
            .then((data) => checkAuth(data))
            .then((data) => setMobile(data));
    };
    useEffect(() => {
        getMobile();
    }, []);

    // //addtocart

    return (
        <div>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                }}
            >
                {mobile.map((item, index) => (
                    <Card
                        key={index}
                        sx={{ width: "250px", height: "400px", textAlign: "center" }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: "200px", width: "200px" }}
                        />
                        <h3>{item.name}</h3>
                        <h5 style={{ color: "grey", width: "220px", margin: "0 auto" }}>{item.description}</h5>
                        <h3 style={{ color: "red" }}>{item.price} Rs/-</h3>
                        <Button variant="contained" onClick={() => addtocart(item)} sx={{ background: "#0d47a1" }}>
                            Add to Cart
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default Menu;
