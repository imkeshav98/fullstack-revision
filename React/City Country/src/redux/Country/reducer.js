

import { ADDCOUNTRY } from './action'

const init = { country : []}

export const countryReducer = ( store =init ,{type,payload}) => {
    switch(type){
        case ADDCOUNTRY :
            return {...store , country:payload}
            default:
                return store
    }

}