import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useApp } from "../ThemedApp";
import { Height } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

import { 
    Home as HomeIcon,
    Person as ProfileIcon,
    Logout as LogoutIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon
} from "@mui/icons-material";

export default function AppDrawer() {
    const { showDrawer, setShowDrawer, auth, setAuth } = useApp();
    return (
        <div>
            <Drawer
                open={showDrawer}
                onClose={()=>setShowDrawer(false)}
            >
                <Box
                    sx={{
                        mb: 6,
                        width: 300,
                        height: 140,
                        bgcolor: "banner",
                        position: "relative"
                    }}                
                >
                    <Box
                        sx={{
                            gap: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            position: "absolute",
                            left: 20,
                            bottom: -30
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 94,
                                height: 94,
                                color: "white",
                                background: deepPurple[500]
                            }}
                        />
                        <Typography sx={{ fontWeight: "bold" }}>
                            Alice
                        </Typography>
                    </Box>
                </Box>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    {
                        auth && (
                            <>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ProfileIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton onClick={() => setAuth(false)}>
                                        <ListItemIcon>
                                            <LogoutIcon color="error" />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </>
                        )
                    }
                    {
                        !auth && (
                            <>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <RegisterIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton onClick={() => setAuth(true)}>
                                        <ListItemIcon>
                                            <LoginIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </>
                        )
                    }
                </List>
            </Drawer>
        </div>
    )
}