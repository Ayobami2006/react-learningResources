import { useState } from 'react';

function InputHandle() {
    let [text, setText] = useState("");

    const handleInput = (event) => {
        var val = event.target.value;
        setText(text = val);
    };

    return ( 
        <div>
            <input
            type="text"
            placeholder='Type here'
            value={text}
            onChange={handleInput}
            />

            <p>
                <strong>Your entry is:</strong> {text}
            </p>
        </div>
    );
}

export default InputHandle;