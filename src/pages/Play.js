import React, {useState, useEffect} from "react";
import { checkLogin } from "../action/auth";
import { addScore } from "../action/score";
import { database } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Play() {
    const [users, setUSers] = useState([]);

    useEffect(() => {
        checkLogin();

        const getUsers = async () => {
            let arrUsers = [];
            let dataUsersRef = collection(database, "users");
            let compileData = await getDocs(dataUsersRef).then((res) => {
              res.forEach((e) => {
                arrUsers.push(e.data());
              });
            });
            return arrUsers;
        };

        getUsers().then((res) => {
            setUSers(res);
          });

        const choiceBtn = document.querySelectorAll('.player-choice');
        const comBtn = document.querySelectorAll('.com-choice');
        const vs = document.getElementById("vsText");
        const resultText = document.getElementById("result");
        let player; //untuk menampung pilihan pemain
        let computer; // untuk menampung pilihan computer
        const WARNA_ABU = "#C4C4C4"; 

        // Button pilihan player di klik
        choiceBtn.forEach(button => button.addEventListener("click", () => {
            player = button.getAttribute('data-choice');
            playerPick(player);
            computerTurn();
            comPick(computer);
            resultShow();
            console.log(resultText.textContent);
            endGame();
        }))

        // Indikator pilihan player
        function playerPick(player) {
            if(player === "rock"){
                choiceBtn[0].style.backgroundColor = WARNA_ABU;
            }
            else if(player === "paper"){
                choiceBtn[1].style.backgroundColor = WARNA_ABU;
            }
            else if(player === "scissors"){
                choiceBtn[2].style.backgroundColor = WARNA_ABU;
            }
        }

        // me-random pilihan dari computer
        function computerTurn() {
            const num = Math.floor(Math.random() * 3) + 1;
            switch(num) {
                case 1:
                    computer = "rock";
                    break;
                case 2:
                    computer = "paper";
                    break;
                case 3:
                    computer = "scissors";
                    break;
            }
        }

        // indikator pilihan computer
        function comPick(computer) {
            if(computer === "rock"){
                comBtn[0].style.backgroundColor = WARNA_ABU;
            }
            else if(computer === "paper"){
                comBtn[1].style.backgroundColor = WARNA_ABU;
            }
            else if(computer === "scissors"){
                comBtn[2].style.backgroundColor = WARNA_ABU;
            }
        }

        // pernilaian hasil
        function checkWinner(player, computer) {
            if(player === computer){
                return "DRAW";
            }
            else if(computer === "rock"){
                return (player === "paper") ? "PLAYER 1 WIN" : "COM WIN";
            }
            else if(computer === "paper"){
                return (player === "scissors") ? "PLAYER 1 WIN" : "COM WIN";
            }
            else if(computer = "scissors"){
                return (player === "rock") ? "PLAYER 1 WIN" : "COM WIN";
            }
        }

        // memuncilkan hasil permainan
        function resultShow() {
            vs.style.display = "none";
            resultText.style.display = "block";
            resultText.textContent = checkWinner(player, computer);
            if(resultText.textContent === "DRAW"){
                resultText.style.paddingTop = "28px";
            }
            else if(resultText.textContent === "PLAYER 1 WIN"){
                resultText.style.paddingTop = "5px";
                addScore("users");
            }
            else if(resultText.textContent === "COM WIN"){
                resultText.style.paddingTop = "28px";
            }
        }

        // mengakhiri permainan
        function endGame() {
            let a
            for(a=0; a<3; a++){
                choiceBtn[a].disabled = true;
            }
        }

        // tombol refresh game
        document.getElementById("refresh-img").onclick = function() {
            let a
            for(a=0; a<3; a++){
                choiceBtn[a].style.backgroundColor = "transparent";
                choiceBtn[a].disabled = false;
                comBtn[a].style.backgroundColor = "transparent";
            }
            vs.style.display = "block";
            resultText.style.display = "none";
        }
    }, []);

    const [isActive, setIsActive] = useState(false)
        
    const handleClick = () => {
        setIsActive(current => !current)
    }

    return (
        <>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Play.css" />
        <div id="game-title">
            <h1 class="title">ROCK PAPER SCISSORS</h1>
            <button id="leaderboard-btn" onClick={handleClick}>Leaderboard</button>
        </div>
        <div class="modal" id="leaderboard" style={{display: isActive ? 'block' : 'none'}}>
            <span onClick={handleClick} class="close">&times;</span>
            <div class="modal-content">
                <h2>Leaderboard</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, i) => (
                                <tr key={e.id}>
                                <td>{i + 1}</td>
                                <td>{e.username}</td>
                                <td>{e.score}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="container-fluid" id="game-play">
            <div class="row">
                <div class="col-lg-5 col-sm-4" id="player-hand">
                    <div class="name"><p id="player-text">PLAYER 1</p></div>
                </div>
                <div class="col-lg-5 offset-lg-2 col-sm-4 offset-sm-4" id="com-hand">
                    <div class="name"><p id="com-text">COM</p></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5 col-sm-4" id="player-hand">
                    <button data-choice="rock" class="player-choice batu hand-icon"></button>
                </div>
                <div class="col-lg-5 offset-lg-2 col-sm-4 offset-sm-4" id="com-hand">
                    <div class="com-choice batu"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5 col-sm-4" id="player-hand">
                    <button data-choice="paper" class="player-choice kertas hand-icon"></button>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <p id="vsText">VS</p>
                    <p id="result"></p>
                </div>
                <div class="col-lg-5 col-sm-4" id="com-hand">
                    <div class="com-choice kertas"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5 col-sm-4" id="player-hand">
                    <button data-choice="scissors" class="player-choice gunting hand-icon"></button>
                </div>
                <div class="col-lg-5 offset-lg-2 col-sm-4 offset-sm-4" id="com-hand">
                    <div class="com-choice gunting"></div>
                </div>
            </div>
            <div id="refresh">
                <button id="refresh-btn">
                    <img src="img/refresh-min.png" alt="refresh button" class="hand-icon" id="refresh-img"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Play;