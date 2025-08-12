import { useState } from "react";
import Form from "../components/Form";
import Item from "../components/Item";
import { useApp } from "../ThemedApp";
import { Box } from "@mui/material";

export default function Home() {
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
        <Box>
            { showForm && <Form add={add} /> }

            {data.map(item => {
                return (
                    <Item key={item.id} item={item} remove={remove}/>
                );
            })}
        </Box>
    );
}