// import logo from './logo.svg';
import '../src/assets/styles/index.css';
import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/Home.js'
import Shop from './pages/Shop/Shop.js'
import User from './pages/User/User.js'
import Users from './pages/Users/Users.js'
import Contact from './pages/Contact/Contact.js'
import StaffLogin from './pages/StaffLogin/StaffLogin.js'
import SignUp from './pages/SignUp/SignUp.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/StaffLogin' element={<StaffLogin />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/User' element={<User />} />
                <Route path='/Users' element={<Users />} />
                {/* <Route path="/details" element={<Details />} /> */}
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
