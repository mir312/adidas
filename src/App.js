import './App.css';
import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import logo from './logo.svg';
function App() {
  return (
  
    <>
  {/* <div style = {{
      width: '150px',
      height: '150px',
      backgroundImg:` url(${Logo})`
  }}></div> */}
    <Header />
   
    <Nav />
    <Logo />
   <Button />
   <Main />
<img src={logo} alt="" />

 <img src="" alt="" />
    </>
  );
}

export default App;
