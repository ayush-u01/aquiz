import { useSelector } from 'react-redux';
import React, { Component } from "react"

// import Disqus from "disqus-react"
// import { DiscussionEmbed } from 'disqus-react';

import Navbar from './components/Navbar/Navbar';
import Quiz from './pages/Quiz/Quiz';
import LandingPage from './pages/LandingPage/LandingPage';
import Instructions from './pages/Instructions/Instructions';
import Result from './pages/Result/Result';
import styles from './App.module.css';

import { useAuth0 } from "@auth0/auth0-react";

// import Login from '../Login/Login';
const App = () => {
  const appState = useSelector((state) => state.appState);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className={styles.app}>
      <div className={styles.container}>

        <Navbar />
        {appState === 'inital' && <LandingPage />}
        {appState === 'starting' && <Instructions />}
        {appState === 'running' && <Quiz />}
        {appState === 'completed' && <Result />}

      </div>
    </div>
  );
};

export default App;
