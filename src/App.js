import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Exchanges from "./components/Exchanges";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main flex" >
          <div className="routes">
            <div className="navbar">
              <Navbar />
            </div>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route  path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>

          {/* <div className="footer" level={5} >
          <Typography.Title style={{color:'white', textAlign:"center"}}>
            Cryptoverse <br/>
            All rights Reserved 
             </Typography.Title>
           <Space>
             <Link to="/">Home</Link>
             <Link to="/exchanges">Exchanges</Link>
             <Link to="/news">News</Link>     
            
           </Space> 
           </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
