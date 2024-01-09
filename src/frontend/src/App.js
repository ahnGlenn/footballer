import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/login/loginPage'
import RegisterPage from './components/login/registerPage';
import MainPage from './components/main/mainPage';
import MatchingPage from './components/main/MatchingPage';
import SchedulePage from "./components/main/schedulePage";

function App() {
  return (
    <Provider store={store} >
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/LoginPage" element={<LoginPage />} />
                        <Route path="/registerPage" element={<RegisterPage />} />
                        <Route path="/mainPage" element={<MainPage />} />
                        <Route path="/MatchingPage" element={<MatchingPage />} />
                        <Route path="/SchedulePage" element={<SchedulePage />} />
                    </Routes>
                </Router>
            </div>
    </Provider>
  );
}

export default App;
