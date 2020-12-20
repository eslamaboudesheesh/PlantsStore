export const searchPlants = (inputsearch) => {
    return {
        type:"SEARCH_COURSES",
        payload:inputsearch
    }
}

export const  SavedPlantsAction = (item) => {
    return {
        type:"SAVED_PLANTS",
        payload: item
      
    }
}

export const  RemovedSavedPlantsAction = (itemId) => {
    console.log(itemId)
    return {
        type:"REMOVE_SAVED_PLANTS",
        payload: itemId
      
    }
}