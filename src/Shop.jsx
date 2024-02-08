import { Button } from "@mui/material";
import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react';



const Shop = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const images = [
        "https://cdn.media.amplience.net/i/xcite/09012024-WGBlocks-Refrigerators-EN?img404=default&w=1920&qlt=75&fmt=auto",
        "https://cdn.media.amplience.net/i/xcite/Feb-Category-BLocks-Computers?img404=default&w=1080&qlt=75&fmt=auto",
        "https://cdn.media.amplience.net/i/xcite/Feb-Category-BLocks-SmallAppliances?img404=default&w=1080&qlt=75&fmt=auto",
        "https://cdn.media.amplience.net/i/xcite/Feb-Category-BLocks-Television?img404=default&w=1080&qlt=75&fmt=auto", "https://cdn.media.amplience.net/i/xcite/Feb-Category-BLocks-Phone?img404=default&w=1080&qlt=75&fmt=auto",


    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change background every 5 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once on component mount

    const containerStyle = {
        width: '100vw',
        height: '400px',
        position: 'fixed',

        left: 0,
        zIndex: -1,
        backgroundImage: `url(${images[backgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease', // Optional: Add transition effect
    };

    return (
        <>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <h3 style={{ padding: "20px" }}>This website uses cookies to ensure you get the best experience.
                    Privacy policy</h3>
                <Button variant="contained" sx={{ background: "#0d47a1", textTransform: "none" }} >Click Menu</Button>
            </div>
            <div style={containerStyle}></div>

        </>
    )

};

export default Shop;

