import React from 'react'
import './App.css'
// import MapChart from './components/MapChart/index'
import PersonalInfo from './components/PersonalInfo/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MapChart from './components/MapChart'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to={'/personal_info'}>个人简历</Link></li>
          <li><Link to={'/map_charts'}>地图</Link></li>
        </ul>
        <Route exact path={'/personal_info'} component={PersonalInfo}/>
        <Route exact path={'/map_charts'} component={MapChart}/>
      </Router>
    </div>
  )
}

export default App
