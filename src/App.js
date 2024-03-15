import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action,comedy,romance,horror,animation } from './constants/url'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Trending' genre={action} />
      <RowPost title='Romance' genre={romance} isSmall />
      <RowPost title='Horror' genre={horror} isSmall />
      <RowPost title='Comedy' genre={comedy} isSmall />
      
      <RowPost title='Action' genre={action} isSmall />
      
    </div>
  );
}

export default App;
