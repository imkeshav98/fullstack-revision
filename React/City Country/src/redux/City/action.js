import axios from 'axios'

export const ADDCITY = "ADDCITY"
export const ADDSORT = 'ADDSORT'
export const ADDFILTER = 'ADDFILTER'

export const addCity = (data) => {
    return {
        type : ADDCITY,
        payload :data
    }
}

export const sort = (by) => {
       return {
           type : ADDSORT,
           payload : by
       }
}

export const filter = (data) => {
       return {
           type : ADDFILTER,
           payload : data
       }
}





export const getData = () => async(dispatch) => {
     axios.get(' http://localhost:8080/cities')
     .then(function(e){
         dispatch(addCity(e.data))
     })
    
}
export const postCity = (city) => async(dispatch) => {
    axios.post('http://localhost:8080/cities',city)
}


export const deleteCity = (id) => async(dispatch) => {
    axios.delete(`http://localhost:8080/cities/${id}`).then(({data})=>{
        dispatch(getData(data))
    })
}

export const updateCity = (city,id) => async(dispatch) => {
    axios.patch(`http://localhost:8080/cities/${id}`,city)
}