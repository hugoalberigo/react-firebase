import React, { useEffect } from 'react';
import Header from '../components/HeaderLandingPage';
import Button from '../components/ButtonPlayGame';
import '../App.css'
import { checkLogout } from '../action/auth';

function LandingPage () {
  useEffect(() => {
    checkLogout()
  })

  return (
    <>
      <link rel="stylesheet" href="/css/LandingPage.css" />
      <div className="App">
      <Header/>
      <div>
        <h1>
          Welcome To Rock Paper Scissor
        </h1>
      </div>
      <Button/>
    </div>
    </>
  );
}

export default LandingPage;
