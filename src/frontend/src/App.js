import './App.css';
import LoginPage from './components/login/Login'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegisterPage from './components/login/registerPage';
import MainPage from './components/main/mainPage';

function App() {
  return (
    <Provider store={store} >
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<LoginPage />} />
                        <Route path="/registerPage" element={<RegisterPage />} />
                        <Route path="/mainPage" element={<MainPage />} />
                    </Routes>
                </Router>
            </div>
    </Provider>
  );
}

export default App;
