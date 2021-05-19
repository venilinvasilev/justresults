import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
    return (
        <Router>
                <div className="site-wrapper">
                    <Header />
                    <hr className="separation-line" />
                    <Content />
                    <Footer />
                </div>
        </Router>
    );
}

export default App;
