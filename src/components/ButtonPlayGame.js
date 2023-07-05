import React from 'react'

function Button() {
    
    const handleClick = () => {
        console.log('hello, my name is Gustavo, but you can call me Gus');
    }  

    return (
        <>
        <link rel="stylesheet" href="/css/ButtonPlayGame.css" />
        <div className="App">
            <div className="button-wrapper">
                <button onClick={handleClick}>Play Game</button>    
            </div>
        </div> 
        </>
    );
} 
    
export default Button;