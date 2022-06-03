
import { useEffect  } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate , Link } from 'react-router-dom'
import {deleteCity, getData ,filter} from '../redux/City/action'
import {sort } from '../redux/City/action'
import { getCountry } from '../redux/Country/action'


export const Home =() => {
    // const [table ,setTable] = useState([])
    const navigate = useNavigate()
    const city  =  useSelector((store) => store.city.city)
    const country = useSelector((store)=> store.country.country)

    const dispatch = useDispatch()
     
    useEffect(()=> {
        dispatch(getData())
    },[])
    useEffect(()=>{
      dispatch(getCountry())
    },[])
   

    const HandleaddCity = () => {
        navigate('/add-city')
    }
    const HandleaddCountry = () => {
      navigate('/add-country')
  }

    return (
        <div >

          <button onClick={HandleaddCountry}>Add Country</button>
          <table border='1'>
                <thead>
                  <th>S.No</th>
                  <th>Country</th>
                </thead>
                <tbody>
                  {country.map((e)=>
                    <tr>
                  <td>{e.id}</td>
                  <td>{e.country}</td>
                    </tr>
                  )}
                </tbody>
            </table>

           <input type="text" placeholder='Filter by Country' 
           onChange={(e)=> dispatch(filter(e.target.value))}/>
            <button onClick={HandleaddCity}>Add City</button>
            <select  onChange={(e)=>{dispatch(sort(e.target.value))}}>
                <option value="">Select</option>
                <option value='asc'>Ascending</option>
                <option value='des'>Descending</option>
            </select>
            <table border='1'>
                <thead>
                  <th>id</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Population</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {city.map((e,i)=>
                  <tr>
                  <td>{i+1}</td>
                  <td>{e.Country}</td>
                  <td>{e.City}</td>
                  <td>{e.Population}</td>
                  <Link to={`/add-city/${e.id}`}><td><button>Edit</button></td></Link>
                  <td><button onClick={()=>dispatch(deleteCity(e.id))}> Delete</button></td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
    )

     
}
