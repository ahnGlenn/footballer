import './App.css';
import LoginPage from './components/Login'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
  <Provider store={store}>
        <div className="App">
            <LoginPage />
        </div>
  </Provider>
  );
}

export default App;
