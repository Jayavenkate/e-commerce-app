/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    const navigate = useNavigate();
    const { cartitem } = useCart();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <AppBar position="static" sx={{ background: "#0d47a1" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" onClick={() => navigate("/shop")}>
                        Trikart Online Shopping
                    </Button>
                </Typography>

                <Button color="inherit" onClick={() => navigate("/getmobile")} sx={{ textTransform: "none" }}>
                    Menu
                </Button>

                <Button color="inherit" onClick={() => navigate("/cartitems")} sx={{ textTransform: "none" }}>
                    <ShoppingCartIcon />{cartitem.length}
                </Button>


                <Button color="inherit" onClick={handleLogout} sx={{ textTransform: "none" }}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar