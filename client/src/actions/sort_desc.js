import { SORT_DESC } from ".";

export const sort_desc = ( array ) => {
    return {
        type: SORT_DESC,
        payload: array
    }
        
}
