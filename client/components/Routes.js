import React from "react";
import HomePage from "./HomePage";
import { AllProducts } from "./AllProducts";
import { Link, Routes , Route,} from 'react-router-dom';
import Navbar from "./NavBar";



    class Routess extends React.Component {
        
        componentDidMount() {
        }
        
  
        render(){
    return (
      <div>
        {/* <div>"VITRZH</div> */}
        
          <Navbar />
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allproducts">AllProducts</Link>
            </li>
          </ul>
        </nav>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="allproducts" element={<AllProducts/>} />
    </Routes>
  
     </div>
      
    );
        }
    

  
}

export default Routess;
