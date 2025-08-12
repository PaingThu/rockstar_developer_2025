import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useApp } from "../ThemedApp";

import { 
    Menu as MenuIcon,
    Add as AddIcon,
    Close as CloseIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon
} from "@mui/icons-material";

export default function Header() {
    
    const { showForm, setShowForm, mode, setMode, showDrawer, setShowDrawer } = useApp();

    return (
        // AppBar: Top Navigation Bar တစ်ခု ဖြစ်ပါတယ်။ App ၇ဲ့ top မှာ stick ဖြစ်နေမှာပါ။ 
        // Toolbar: AppBar ၇ဲ့ အတွင်းမှာ အသုံးပြုမဲ့ MUI Component တစ်ခုပါ။ Top Navigation bar or head bar မှာ ၇ှိတဲ့ child elements(Menu Button, Title, Nav Icons etc) တွေကို သပ်သပ်၇ပ်၇ပ် ဖြစ်အောင် လုပ်ပေးပါတယ်။
        // IconButton: Icon ကို အုပ်ထားပေမဲ့ style လည်း လုပ်ထားပေးပြီးသား clickable button component တစ်ခုဖြစ်ပါတယ်။ အတွင်းထဲမှာ menu Icon, close icon တွေ ထည့်သုံးလို့၇ပါတယ်။
        // Typography: Material Design guidelines အနေနဲ့ text styling လုပ်ပေးထားတဲ့ Title, Description or any textual content တွေအတွက် အသုံးပြုတဲ့ MUI Component ဖြစ်ပါတယ်။
        // Box: Container တစ်ခုပါ။ Layout တွေကို လွယ်ကူစွာ ဖန်တီးနိုင်မဲ့ MUI versatile wrapper component တစ်ခု ဖြစ်ပါတယ်။
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setShowDrawer(!showDrawer)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography sx={{ flexGrow: 1, ml: 2 }}>
                    Yaycha
                </Typography>

                <Box>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? <CloseIcon /> : <AddIcon />}
                    </IconButton>
                    {
                        mode === "dark" ? 
                        (
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={() => setMode("light")}
                            >
                                <LightModeIcon />
                            </IconButton>
                        ) :
                        (
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={() => setMode("dark")}
                            >
                                <DarkModeIcon />
                            </IconButton>
                        )
                    }
                    
                </Box>
            </Toolbar>
        </AppBar>
    )
}