import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";

const Footer = () => {
    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "grey", bottom: "0" }}
        >
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{ color: "black", marginRight: "16px" }}
                        >
                            Support
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{ color: "black", marginRight: "16px" }}
                        >
                            Help Center
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{ color: "black", marginRight: "16px" }}
                        >
                            Privacy
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{ color: "black", marginRight: "16px" }}
                        >
                            Terms of Service
                        </Link>
                    </Typography>
                </Box>
                <Typography variant="body2" align="right">
                    &copy; {new Date().getFullYear()} Your Company Name
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
