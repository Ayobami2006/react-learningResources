import Axios from "axios";
import { useState } from "react";

function APIData() {

    // const [catFact, setCatFact] = useState("")

    // fetch('https://catfact.ninja/fact')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // })

    // const fetchCatFact = () => {
    //     axios.get('https://catfact.ninja/fact').then((res) => {
    //         setCatFact(res.data.fact);
    //     })
    // }

    // useEffect(() => {
    //     fetchCatFact();
    // }, [])


    const [name, setName] = useState("");
    const [pridictedAge, setPridictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPridictedAge(res.data);
        })
    }

    return ( 
        <div>
            {/* <button onClick={fetchCatFact} > Generate CAT Fact</button>
            <p> {catFact} </p> */}
            <input placeholder="Ex. Abdulmujeeb"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button onClick={fetchData} >Predict Age</button>

            <h1> Name: {pridictedAge?.name} </h1>
            <h1> Predicted Age: {pridictedAge?.age} </h1>
            <h1> Count: {pridictedAge?.count} </h1>

            <hr />

            <Excuse />
        </div>
     );
}

export default APIData;


const Excuse = () => {

    const [generatedExcuse, setGeneratedExcuse] = useState("");
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
            setGeneratedExcuse(res.data[0].excuse)
        })
    }

    return (
        <div>
            <h1> Generate An  Excuses </h1>
            <button onClick={() => fetchExcuse('party')} > Party </button>
            <button onClick={() => fetchExcuse('family')} > Family </button>
            <button onClick={() => fetchExcuse('office')} > Office </button>

            <p> {generatedExcuse} </p>
        </div>
    )
}