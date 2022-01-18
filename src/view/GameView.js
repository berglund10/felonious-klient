import React, { useContext } from "react";
import { ProfileEgenskaper } from "../components/profile/ProfileEgenskaper";
import { UserContext } from "../shared/global/UserProvider";

export const GameView = () => {

    const [authUser, setAuthUser] = useContext(UserContext);

    const displayUserIfAuth = () => {
        return (authUser) 
        ? <ProfileEgenskaper/>
        : <h3>Du måste vara inloggad för att få mer information</h3>
    }

    return (
        <div>
            {displayUserIfAuth()}
        </div>
    )
}