import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
    Badge,
    Tooltip,
} from "@mui/material";
import {
    Search,
    Mail,
    Notifications,
    Language,
    PowerSettingsNew,
} from "@mui/icons-material";

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: "grey" }}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    My App
                </Typography>

                <div style={{ flexGrow: 1 }} />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "500px",
                            border: "1px solid white",
                            borderRadius: "5px",
                        }}
                    >
                        <Search />
                        <InputBase
                            placeholder="Search..."
                            style={{ width: "300px", marginLeft: 8 }}
                        />
                    </div>

                    <Tooltip title="Messages" placement="bottom">
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="error">
                                <Mail />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Notifications" placement="bottom">
                        <IconButton color="inherit">
                            <Badge badgeContent={2} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Language" placement="bottom">
                        <IconButton color="inherit">
                            <Language />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Power" placement="bottom">
                        <IconButton color="inherit">
                            <PowerSettingsNew />
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
