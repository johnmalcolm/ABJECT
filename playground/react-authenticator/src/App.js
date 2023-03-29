import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import DashboardPrototype from './components/dashboardPrototype';
import ApuriBtn from './components/ApuriBtn';
function App() {
  return (
    // group below components togethe
    <div className="App">
      <header className='demo-header'>
        <h1>Neste Oma Apuri Demo</h1>
        <div class="login-buttons">
          <LoginButton />
          <LogoutButton />
        </div>
      </header>
      <DashboardPrototype />
      <ApuriBtn />
    </div>
  );
}

export default App;
