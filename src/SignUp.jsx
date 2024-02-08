import { TextField, Button, Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "./api/global";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleClick = async () => {
        const userData = {
            name: name,
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${Api}/signup`, userData);

            if (response.status === 200) {
                console.log("User registered successfully");
                navigate("/login");
            } else {
                console.error("Failed to register user");
            }
        } catch (error) {
            console.error("Error registering user:", error.response.data.message);
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setErrorMessage(error.response.data.message);
            }
        }

        setName("");
        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "sans-serif", fontSize: "30px" }}>Sign Up</h2>
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
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    color="secondary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <Button variant="contained" onClick={handleClick}>
                    Register
                </Button>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <p>Already have an account ?</p>
                    <Button onClick={() => navigate("/login")}>Login</Button>
                </div>
            </Card>
        </div>
    );
};

export default SignUp;
