import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Newscomponent from './components/Newscomponent';


function App() {

//   const[state,setstate]=useState(0)
 
//  const incpro=(progress)=>
//   {
//     setstate(progress=progress)
//   }
  return (
    <div>
     <Router>
      <Navbar />
      {/* <LoadingBar
      color='#f11946'
      progress={progress}
      
    /> */}
       <Routes>
       <Route path="/" element={ <Newscomponent    key={'world'} psize={9} country={'World'}/>} />
       <Route path="/kashmir" element={ <Newscomponent   key={'kashmir'} psize={9} country={'Kashmir'}/>} />
       <Route path="/india" element={ <Newscomponent   key={'India'} psize={9} country={'India'}/>} />
       
       <Route path="/business" element={ <Newscomponent   key={'business'} psize={9} country={'Business'}/>} />
       <Route path="/crypto" element={ <Newscomponent   key={'crypto'} psize={9} country={'Crypto'}/>} />
       <Route path="/sports" element={ <Newscomponent    key={'sport'}psize={9} country={'Sport'}/>} />
       <Route path="/Technology" element={ <Newscomponent    key={'Technology'}psize={9} country={'Technology'}/>} />
       <Route path="/Health" element={ <Newscomponent    key={'Health'}psize={9} country={'Health'}/>} />
      
     </Routes>
</Router>
    </div>
  );
}

export default App;
