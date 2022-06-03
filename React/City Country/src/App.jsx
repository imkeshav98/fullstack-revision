import {Routes , Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Country } from './components/Country'
import { City } from './components/City'
import { Update } from './components/Update'
import './App.css'

function App() {
 

  return (
    <div className="App">
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
           <Route path = '/add-country' element={<Country />}></Route>
           <Route path='/add-city' element ={<City />}></Route>
           <Route path = '/add-city/:id' element = {<Update />}></Route>
        </Routes>
    </div>
  )
}

export default App
