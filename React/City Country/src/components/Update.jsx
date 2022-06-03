import {useState} from 'react'
import { updateCity } from '../redux/City/action'
import { useNavigate ,useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Update = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [city , setCity] = useState({
        Country :'',
        City:'',
        Population:''
    })
   console.log(city)
    const handleChange = (e) => {
         setCity({
             ...city,
             [e.target.name] : e.target.value
         })
    }

    return (
        <>
        <input type="text" name="Country" placeholder="Add Country" onChange={handleChange}/>
        <input type="text" name="City" placeholder="Add City" onChange={handleChange}/>
        <input type="text" name="Population" placeholder="Add Population" onChange={handleChange} />
        <button onClick={()=>dispatch(updateCity(city,id),navigate('/'))}>Edit Details</button>
        </>
    )
}