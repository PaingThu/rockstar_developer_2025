import { useRef } from "react";

export default function Form({ add }) {
    const contentRef = useRef();
    const nameRef = useRef();
    return (
        <form 
            onSubmit={e => {
                // Server ကို တိုက်၇ိုက် Submit မလုပ်၇န်
                e.preventDefault()
                // သက်ဆိုင်၇ာReferenceတွေကနေ တဆင့် Inputတွေ၇ဲ့ လက်၇ှိ Valueကနေ content နဲ့ name ကို ၇ယူမယ်
                const content = contentRef.current.value
                const name = nameRef.current.value
                // props အနေနဲ့ လက်ခံ၇၇ှိမဲ့ add()ကို ခေါ်မယ်
                add(content, name)
                // အပေါ်က လုပ်စ၇ာ၇ှိတာတွေ လုပ်ပြီးတဲ့ အခါ Form input တွေကို Clear လုပ်မယ်
                e.currentTarget.reset()
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                padding: 10,
                borderRadius: 8,
                marginBottom: 20,
                background: "#def"
            }}
        >
            <input 
                ref={contentRef}
                type="text" 
                placeholder="Content"
                style={{ padding: 5 }}
            />
            <input 
                ref={nameRef}
                type="text" 
                placeholder="Name"
                style={{ padding: 5 }}
            />
            <button
                type="submit"
                style={{
                    padding: 8,
                    background: "#0d6efd",
                    color: "white",
                    border: "0 none"
                }}
            >
                Post
            </button>

        </form> 
    )
}