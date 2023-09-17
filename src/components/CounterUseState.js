import { useState, useEffect } from "react";
import '../style.css';


function Counter() {

    const styles = {
        firstBtn:{
            background: "linear-gradient(white, lightGreen, green)",
            margin: "1%",
            transform: "scale(1.1)"
        }
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("Number of clicks: " + count)
    });

    const handleIncreament = () => {
        setCount(count+2);
    }

    const handleDecreament = () => {
        setCount(count - 1);
    }

    const setToZero = () => {
        setCount(0);
    }

    return ( 
        <div className="counter">
            <button onClick={handleIncreament} style={styles.firstBtn} > Increase </button>
            <button onClick={handleDecreament} className="secondBtn" > Decrease </button>
            <button onClick={setToZero} className="thirdBtn" > Set to Zero </button>

            <p>
                <strong>Your count is:</strong> {count}
            </p>
        </div>
    );
}


/* <div>
<button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black")
        }}
      > 
        Show/Hide 
      </button>

      <h1 style={{color:  textColor}}>My Name is Abdulmujeeb 💯</h1>
</div> */

export default Counter;