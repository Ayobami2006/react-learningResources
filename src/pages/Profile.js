import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "./ManagingState";

export const Profile = () => {
    const { username, setUsername } = useContext(AppContext);
    return (
        <div>
            <h2> THIS IS PROFILE PAGE</h2>
            <h2> USER IS: {username} </h2>
            <ChangeProfile setUsername={setUsername} />
        </div>
    );
}