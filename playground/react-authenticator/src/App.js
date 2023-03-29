import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import DashboardPrototype from './components/dashboardPrototype';

function App() {
  return (
    // group below components togethe
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <DashboardPrototype />
    </div>
  );
}

export default App;
