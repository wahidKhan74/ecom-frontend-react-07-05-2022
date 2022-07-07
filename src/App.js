import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      {/* <Hello name="John Snow" />  */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
