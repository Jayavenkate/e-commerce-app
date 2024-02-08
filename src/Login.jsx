import { TextField, Button, Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleClick = async () => {
        const userData = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                "https://skygoal-task.vercel.app/login",
                userData
            );
            if (response.status === 200) {
                console.log("Login successful");
                const result = response.data;
                console.log(result)
                localStorage.setItem("token", result.token);

                navigate("/shop");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error logging in:", error.response.data);
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setErrorMessage(error.response.data.message);
            }
        }

        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "sans-serif", fontSize: "30px" }}>Login</h2>
                <h4
                    style={{ fontFamily: "sans-serif", fontSize: "15px", color: "grey" }}
                >
                    Create your account
                </h4>
            </div>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "350px",
                    padding: "30px",
                    margin: "0px auto",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    color="secondary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <Button variant="contained" onClick={handleClick}>
                    Login
                </Button>
            </Card>
        </div>
    );
};
export default Login;
