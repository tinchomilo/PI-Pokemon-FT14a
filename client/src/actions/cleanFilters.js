import { CLEAN_FILTERS } from ".";

import React from 'react'

export const cleanFilters = () => {
    return ( dispatch ) => {
        dispatch({
            type: CLEAN_FILTERS,
            payload: []
        })
    }
}
