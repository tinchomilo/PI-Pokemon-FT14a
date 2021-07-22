import { FILTER_BY_TYPE } from ".";

export const filter_type = (type)=>{
   
    return (dispatch)=>{        
        return dispatch({
            type: FILTER_BY_TYPE,
            payload: type
        })
    }
}