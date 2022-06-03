

import { ADDCITY } from "./action";
import { ADDSORT } from './action'
import { ADDFILTER } from "./action";

const init = {city : []}

export const cityReducer = (store=init , {type,payload}) => {
       switch(type){
           case ADDCITY : 
               return {...store , city:payload}
            case ADDSORT :
                return {...store , city : [...store.city].sort((a,b)=>{
                 
                    if(payload === 'asc'){
                    return  a.Population-b.Population
                    }else if(payload==='des'){
                    return  b.Population-a.Population
                    }else{
                    return  a.id-b.id
                    }
                 })}
            case ADDFILTER : 
             return {...store , city:store.city.filter((e)=>e.Country.includes(payload))}
           default:
               return store
       }     
       
}