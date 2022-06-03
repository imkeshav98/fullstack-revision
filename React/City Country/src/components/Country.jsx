import {useState} from 'react'
import  { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCountry } from '../redux/Country/action'

export const Country = () => {
     
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [country , setCountry] = useState({
        country:'',
    })
    
    const handleChange = (e) => {
        setCountry({
            ...country,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
        <input type="text" placeholder="Add Country" name="country"
         onChange = {handleChange}/>
         <button onClick={()=>dispatch(postCountry(country) , navigate('/'))}>Add Country</button>
        </>
    )
}