import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/LoginPage';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import Container from './Layout/Container';
import Header from './components/Header';

function App() {
  return (
    <>
    <Container>
      <Header/>
      <Outlet/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
