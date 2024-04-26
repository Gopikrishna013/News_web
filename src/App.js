import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Navbar from './Navbar'

import News from './News'

import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)


  return (
    <div className="App">

      <Router>

        <Navbar/>

        <LoadingBar
        color='#f11946' height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

        <Routes>
          {/* <Route path='/' element={<News/>}/> */}
          <Route path='/Home'             element={<News category='Home' setProgress={ setProgress} />}/>
          <Route path='/Entertainment'    element={<News category='Entertainment' setProgress={ setProgress} />}></Route>
          <Route path='/Business'         element={<News category='Business' setProgress={ setProgress} />}></Route>
          <Route path='/Sports'           element={<News category='Sports' setProgress={ setProgress} />}></Route>
          <Route path='/Health'           element={<News category='Health' setProgress={ setProgress} />}></Route>
          <Route path='/Science'          element={<News category='Science' setProgress={ setProgress} />}></Route>
          <Route path='/Technology'       element={<News category='Technology' setProgress={ setProgress} />}></Route>
          <Route path='/General'          element={<News category='General' setProgress={ setProgress} />}></Route>
          

        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
