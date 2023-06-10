import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography variant="body2">
                        <Link href="#">Support</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Help Center</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Privacy</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#">Terms of Service</Link>
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
