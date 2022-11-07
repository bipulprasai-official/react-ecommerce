
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Notfound from './Pages/404notfound';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
const App =()=> {

  const theme = {
    colors:{
      heading:"rgb(24 24 29)",
      text:"rgb(24 24 29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"#f5f5f5",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#fffff",
      gradient:"linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{mobile:"768px",tab:"998px"}
  }
  return (
    <ThemeProvider theme={theme}>
  <BrowserRouter>
  <GlobalStyle/>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/details/:id" element={<SingleProduct/>}/>
  <Route path="*" element={<Notfound/>}/>
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
