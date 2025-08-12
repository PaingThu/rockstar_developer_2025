import { useState } from "react";

import Item from "./components/Item";
import Form from "./components/Form";
import { useApp } from "./ThemedApp";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";

export default function App() {
    // AppContext ထဲက shared data တွေကို access လုပ်ဖို့အတွက်ခေါ်ယူခြင်း
    const { showForm, setGlobalMsg } = useApp();

    // React useState() hooks ကို အသုံးပြုပြီး state data တစ်ခုဖန်တီးခြင်း
    // data က current state ဖြစ်ပြီးတော့ setData ကတော့ state ကို update လိုပ်နိုင်မဲ့ function ဖြစ်ပါတယ်။
    const [data, setData] = useState([
        { id: 3, content: "Yay, interesting.", name: "Chris" },
        { id: 2, content: "React is fun.", name: "Bob" },
        { id: 1, content: "Hello, World!", name: "Alice" },
    ])

    const remove = id => {
        setData(data.filter(item => item.id !== id))
        setGlobalMsg("An item deleted.");
    }
    const add = (content, name) => {
        const id = data[0] ? data[0].id + 1 : 1;
        setData([{ id, content, name}, ...data])
        setGlobalMsg("An item added.");
    }
    return (
        // Box: Container တစ်ခုပါ။ Layout တွေကို လွယ်ကူစွာ ဖန်တီးနိုင်မဲ့ MUI versatile wrapper component တစ်ခု ဖြစ်ပါတယ်။
        // Container: အပြောင်းအလဲမ၇ှိတဲ့ Width, Spacing နဲ့ Content တွေကို wrap လုပ်တဲ့ နေ၇ာမှာ သုံးတဲ့ MUI Component တစ်ခု ဖြစ်ပါတယ်။ Layout တွေကို Responsive ဖြစ်ပြီးတော့ center ကျစေပါတယ်။ Smaller screen တွေ အတွက် Width ကို auto adjust လုပ်ပေးပါတယ်
        <Box>
            <Header />
            <Container
                maxWidth = "sm"
                sx={{ mt:4 }}
            >
                { showForm && <Form add={add} /> }

                { data.map(item => {
                    return (
                        <Item 
                            key={item.id}
                            item={item}
                            remove={remove}
                        />
                    )
                }) }

            </Container>
        </Box>
    )
} 