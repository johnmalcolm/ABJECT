import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";

import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import DashboardPrototype from './components/dashboardPrototype';
import ApuriBtn from './components/ApuriBtn';

import { Auth0Provider } from "@auth0/auth0-react";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
  <Auth0Provider
    domain='dev-wodn7nbigr7lzvoo.us.auth0.com'
    clientId='WzqTRbnwVtX14YgFeGXbkTwXPoN1vDcT'
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/'
    }}
  >
    <div className="App">
      <header className='demo-header'>
        <h1>Neste Oma Apuri Demo</h1>
        <div className="login-buttons">
          <LoginButton />
          <LogoutButton />
        </div>
      </header>
      <DashboardPrototype />
      <ApuriBtn />
      {/* <div className="chatbox"></div> */}
    </div>
  </Auth0Provider>
  );
}
