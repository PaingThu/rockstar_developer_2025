import { useRef } from "react";

import { Box, TextField, Button } from "@mui/material";

export default function Form({ add }) {

    const contentRef = useRef();

    return (
        <form 
            onSubmit={e => {
                // Server ကို တိုက်၇ိုက် Submit မလုပ်၇န်
                e.preventDefault()
                // သက်ဆိုင်၇ာReferenceတွေကနေ တဆင့် Inputတွေ၇ဲ့ လက်၇ှိ Valueကနေ content နဲ့ name ကို ၇ယူမယ်
                const content = contentRef.current.value
                // props အနေနဲ့ လက်ခံ၇၇ှိမဲ့ add()ကို ခေါ်မယ်
                add(content, "Alice")
                // အပေါ်က လုပ်စ၇ာ၇ှိတာတွေ လုပ်ပြီးတဲ့ အခါ Form input တွေကို Clear လုပ်မယ်
                e.currentTarget.reset()
            }}
        >
            <Box sx={{ mb: 4, textAlign: "right" }}>
                <TextField 
                    inputRef={contentRef}
                    type="text"
                    placeholder="Content"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Post
                </Button>
            </Box>

        </form> 
    )
}