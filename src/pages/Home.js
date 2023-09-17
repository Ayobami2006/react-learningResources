import { useContext } from "react";
import { AppContext } from "./ManagingState";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const { username } = useContext(AppContext);

    const {
        data: catData,
        isLoading,
        isError,
        refetch
    } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });
    console.log(catData);
    
    if (isLoading) {
        return <h2> Loading... </h2>
    }

    if (isError) {
        return <h2> Sorry, there was an Error </h2>
    }


    return (
        <div>
            <h1> THIS IS THE HOME PAGE, AND THE USERNAME IS: { username }</h1>
            <p> {catData?.fact} </p>
            <p> {catData?.length} </p>
            <button onClick={refetch} > Update fact </button>
        </div>
    );
}