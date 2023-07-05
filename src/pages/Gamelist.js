import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { checkLogin } from "../action/auth";

function Gamelist() {
    useEffect(() => {
        checkLogin();
    });

    return (
        <>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Gamelist.css" />
        <h1>GAME LIST</h1>
        <div className="Gamelist">
            <table>
                <tr>
                    <th>NAME</th>
                    <th>PEGI RATINGS</th>
                    <th>PLAY</th>
                </tr>
                <tr>
                    <td>Rock Paper Scissors</td>
                    <td>PEGI 12</td>
                    <td><Link to="/Play"><button class="button"><span>FREE</span></button></Link></td>
                </tr>
                <tr>
                    <td>Crazy Games</td>
                    <td>PEGI 18</td>
                    <td><button class="button"><span>5$</span></button></td>
                </tr>
                <tr>
                    <td>Miniclip</td>
                    <td>PEGI 3</td>
                    <td><button class="button"><span>Free</span></button></td>
                </tr>
                <tr>
                    <td>Armor Games</td>
                    <td>PEGI 18</td>
                    <td><button class="button"><span>10$</span></button></td>
                </tr>
                    <tr>
                    <td>AARP Games</td>
                    <td>PEGI 12</td>
                    <td><button class="button"><span>Free</span></button></td>
                </tr>
	        </table>
	</div>
        </>
    )
}

export default  Gamelist;
