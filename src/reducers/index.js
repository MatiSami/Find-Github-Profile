const initialvalue = {
    repos: {
    }
}

const rootReducer = (state = initialvalue, action) => {
    switch (action.type) {
        case ('ADD_REPOS_LIST'):         
            return {
                ...state,
                repos: action.payload,

              };
        default:
            return state
    }
}

export default rootReducer