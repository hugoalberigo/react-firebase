import React, {useEffect} from "react";
import { checkLogin } from "../action/auth";

function Home() {
    useEffect(() => {
        checkLogin();
    });

    return (
        <>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Home.css" />
        <div id="main-item">
            <h1>PLAY TRADITIONAL GAME</h1>
            <h3>Experience new traditional game play</h3>
            <button id="play-btn" class="btn btn-warning"><a href="/play">PLAY NOW</a></button>
        </div>
        </>
    )
}

export default Home;
