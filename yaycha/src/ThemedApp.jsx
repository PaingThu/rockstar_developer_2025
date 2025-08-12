import { createContext, useContext, useMemo, useState } from "react";

import {
    CssBaseline,
    Snackbar,
    ThemeProvider,
    createTheme
} from "@mui/material";

import App from "./App";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";
import Likes from "./pages/Likes";

// App ၇ဲ့ data တွေကို Components တွေမှာ props အဖြစ်နဲ့ manually pass ပေးစ၇ာမလိုပဲနဲ့ Components မှာ အသုံးပြုနိုင်ဖို့အတွက် React ၇ဲ့ Context တစ်ခုကို ဖန်တီးပါတယ်။
const AppContext = createContext();
// အပေါ်က ခုဏကဖန်တီးလိုက်တဲ့ AppContext က Variable holding context လေး တစ်ခု ဖြစ်ပါတယ်။
// Share လုပ်မဲ့ data တွေကို သိမ်းထားတဲ့ bucket တစ်ခုအနေနဲ့ မြင်ကြည့်နိုင်ပါတယ်။
// အဲ့ထဲမှာပါတဲ့ data တွေကို လိုအပ်တဲ့ Component တွေက ယူသုံးနိုင်ပါတယ်။
// AppContext ကို Provider နဲ့ တွဲသုံးခြင်းဟာ Component နဲ့ shared data တွေကို wrap လုပ်ပေးထားလိုက်တဲ့ သဘောဖြစ်သွားပြီးတော့
// useContent လို့ react hooks နဲ့ ဘယ် Component ကမဆို shared data တွေကို access လုပ်လို့ ၇သွားပါမယ်။

/**
 * ဒီ Function ကို ခေါ်ပြီးတော့ AppContent ထဲမှာ သိမ်ထားတဲ့ shared data တွေ access လုပ်နိုင်မှာဖြစ်ပါတယ်။
 * တစ်ခြား Component တွေက ခေါ်သုံးနိုင်ဖို့အတွက် export လုပ်ပေးထား၇ပါမယ်။
 * @returns useContent (react hooks) ကိုအသုံးပြုပြီး AppContent ထဲမှာ သိမ်ထားတဲ့ data တွေကို return ပြန်ပေးထားပါတယ်
 */
export function useApp() {
    return useContext(AppContext);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile/:id",
                element: <Profile />
            },
            {
                path: "/comments/:id",
                element: <Comments />
            },
            {
                path: "/likes/:id",
                element: <Likes />
            }
        ]
    }
]);

export default function ThemedApp(){

    // React useState() hooks ကို အသုံးပြုပြီး state data တွေကို ဖန်တီးထားပါတယ်။
    // current state နဲ့ state ကို update လုပ်နိုင်မဲ့ function တွေပဲဖြစ်ပါတယ်။
    const [showForm, setShowForm] = useState(false);
    const [ showDrawer, setShowDrawer ] = useState(false);
    const [ globalMsg, setGlobalMsg ] = useState(null);
    const [ auth, setAuth ] = useState(false);
    const [ mode, setMode ] = useState("light");

    // ThemedApp Component Re-render လုပ်တိုင်း createTheme function ကို အမြဲမrun ပဲ လိုအပ်မှ(mode တန်ဖိုးပြောင်းမှ) run စေဖို့အတွက် react ၇ဲ့ hook function ဖြစ်တဲ့ useMemo ကို အသုံးပြု၇ပါတယ်။
    const theme = useMemo(() => {
        // Material-UI(MUI) ၇ဲ့ createTheme function ကို အသုံးပြုပြီး Application အတွက် Custome Theme တစ်ခုကို define လုပ်ထားခြင်းဖြစ်ပါတယ်။
        // colors, typography, spacing, and other design elements တွေကို တစ်နေ၇ာတည်းမှာ စီစဥ်ထားလို့၇ပါတယ်
        // Theme ထဲမှာ တွေ့၇တဲ့ palette property နဲ့ app ၇ဲ့ color တွေကို control လုပ်လို့၇ပါတယ်
        // mode: ကို "dark" လို့ သတ်မှတ်ထား၇င် background က dark ဖြစ်ပြီးတော့ content တွေကို သူနဲ့ လိုက်ဖက်တဲ့ color တွေကို ပြောင်းပြီး ဖော်ပြပေးသွားမှာ ဖြစ်ပါတယ်။
        // ဖန်တီးထားတဲ့ Theme ကို MUI ၇ဲ့ ThemeProvider Component ကို အသုံးပြုပြီး App မှာ အသုံးပြုပေး၇မှာ ဖြစ်ပါတယ်။
        return createTheme({
            palette: { 
                mode,
                primary: deepPurple,
                banner: mode === "dark" ? grey[800] : grey[200],
                text: {
                    fade: grey[500]
                }
            }
        });
    }, [mode]);


    return (
        // Theme Provider: အပေါ်မှာ ဖန်တီးထားတဲ့ theme ကို မိမိ App၇ဲ့ Theme အဖြစ်အသုံးပြုဖို့အတွက် MUI ၇ဲ့ ThemeProvider Component ကို အသုံးပြုခြင်း
        // AppContext.Provider: App၇ဲ့ shared data တွေကို provide လုပ်ပေးဖို့အတွက်
        // App: မိမိ App
        // CssBaseLine: Browser ၇ဲ့ Default css style တွေကို reset လုပ်ပေးတဲ့ MUI ၇ဲ့ Component တစ်ခု ဖြစ်ပါတယ်။ Material design နဲ့ ကိုက်ညီစေမဲ့ တစ်ချို့ default typography and layout styling တွေကို ထည့်ထားပါတယ်။
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ 
                    showDrawer, setShowDrawer,
                    showForm, setShowForm,
                    globalMsg, setGlobalMsg,
                    mode, setMode,
                    auth, setAuth,
                }}
            >
                <RouterProvider router={router} />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    )
}