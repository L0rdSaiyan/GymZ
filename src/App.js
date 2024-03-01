import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import Container from './Layout/Container';
import Header from './components/Header';

function App() {
  return (
    <>
    <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
    </>
  );
}

export default App;
