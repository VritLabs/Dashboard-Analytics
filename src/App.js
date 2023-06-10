import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div style={{ display: "flex", height: "100vh", bottom: "0" }}>
            <Sidebar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 auto",

                    overflowY: "auto",
                }}
            >
                <Navbar />
                <Body />
                <Footer />
            </div>
        </div>
    );
};

export default App;
