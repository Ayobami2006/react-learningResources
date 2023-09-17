import { useState, useEffect } from "react";

function Text() {

    const [showText, setShowText] = useState(false);


    return ( 
        <div>
            <button onClick={() => {
                setShowText(!showText)
            }} > Show Text </button>

            {showText && <Input />}
        </div>
    );
}

export default Text;


const Input = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log('COMPONENT MOUNTED');

        return () => {
            console.log('COMPONENT UNMOUNTED')
        }
    }, [])

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value)
            }} type="text" />

            <h1>{text}</h1>
        </div>
    )
}