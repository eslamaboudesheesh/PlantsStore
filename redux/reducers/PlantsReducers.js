import React from 'react'

import dataDemo from '../../data/dataDemo.json'

import { combineReducers } from 'redux'
const initialState = {
    MyPlants : dataDemo,
    inputsearch: ''
}
const initSavedState = {
    mySavedPlants : []
}
const PlantsReducers = (state = initialState , action) => {
    if(action.type === 'SEARCH_COURSES') {
        return {
            MyPlants:state.MyPlants,
            inputsearch: action.payload
        }
    }

    return state
}

const plantsSavedReducers = (state= initSavedState , action) => {
    switch (action.type) {
        case "SAVED_PLANTS": 
          return {
            mySavedPlants: [...state.mySavedPlants, action.payload ]
          }
          case 'REMOVE_SAVED_PLANTS':
            return {
              mySavedPlants : state.mySavedPlants.filter(e=> e.id !== action.payload)
            }
      
        default: return state;
      }

}




export default  combineReducers ({ PlantsReducers ,plantsSavedReducers }) 
